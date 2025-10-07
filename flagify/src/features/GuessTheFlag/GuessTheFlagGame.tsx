// src/features/GuessTheFlag/GuessTheFlagGame.tsx
import { useState, useEffect } from "react";
import GuessTheFlagCard from "../../components/GuessTheFlagCard/GuessTheFlagCard";
import { getRandomFlags, ALL_FLAGS } from "../../utils/flags/flags";

export const GuessTheFlagGame = () => {
  const [availableFlags, setAvailableFlags] = useState(ALL_FLAGS);
  const [currentFlag, setCurrentFlag] = useState<{ country: string; flag: string } | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Start first round on mount
  useEffect(() => {
    if (availableFlags.length > 0) {
      startRound(availableFlags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startRound = (flagsPool: typeof ALL_FLAGS) => {
    if (flagsPool.length === 0) {
      setGameOver(true);
      setCurrentFlag(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * flagsPool.length);
    const newFlag = flagsPool[randomIndex];

    const { choices } = getRandomFlags(newFlag, flagsPool);

    setCurrentFlag(newFlag);
    setOptions(choices);
  };

  const handleGuess = (country: string) => {
    if (!currentFlag) return;

    // Update score if correct
    if (country === currentFlag.country) setScore(prev => prev + 1);

    // Remove guessed flag from available flags
    const remainingFlags = availableFlags.filter(f => f.country !== currentFlag.country);
    setAvailableFlags(remainingFlags);

    // Start next round if flags remain
    if (remainingFlags.length > 0) {
      startRound(remainingFlags);
    } else {
      setGameOver(true);
      setCurrentFlag(null);
    }
  };

  return (
    <GuessTheFlagCard title="Guess the Flag!">
      {!gameOver && currentFlag ? (
        <>
          <img
            src={currentFlag.flag}
            alt={currentFlag.country}
            style={{
              width: 150,
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              marginBottom: "1rem",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleGuess(option)}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "#2563EB",
                  color: "white",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1E3A8A")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2563EB")}
              >
                {option}
              </button>
            ))}
          </div>

          <p style={{ marginTop: "1rem", fontWeight: 600 }}>
            Score: {score} / {ALL_FLAGS.length}
          </p>
        </>
      ) : (
        <p style={{ fontSize: "1.25rem", color: "#FBBF24" }}>
          🎉 Game Over! Your final score: {score} / {ALL_FLAGS.length}
        </p>
      )}
    </GuessTheFlagCard>
  );
};

export default GuessTheFlagGame;
