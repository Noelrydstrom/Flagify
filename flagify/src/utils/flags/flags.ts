// src/utils/flags/flags.ts
import albania from "../../assets/flags/albania.svg";
import china from "../../assets/flags/china.svg";
import finland from "../../assets/flags/finland.svg";
import france from "../../assets/flags/france.svg";
import hungary from "../../assets/flags/hungary.svg";
import india from "../../assets/flags/india.svg";
import japan from "../../assets/flags/japan.svg";
import palestine from "../../assets/flags/palestine.svg";
import spain from "../../assets/flags/spain.svg";
import sweden from "../../assets/flags/sweden.svg";

export const ALL_FLAGS = [
  { country: "Albania", flag: albania },
  { country: "China", flag: china },
  { country: "Finland", flag: finland },
  { country: "France", flag: france },
  { country: "Hungary", flag: hungary },
  { country: "India", flag: india },
  { country: "Japan", flag: japan },
  { country: "Palestine", flag: palestine },
  { country: "Spain", flag: spain },
  { country: "Sweden", flag: sweden },
];

/**
 * Generates random flag choices, always including the correct one.
 */
// src/utils/flags/flags.ts
export const getRandomFlags = (
  correctFlag: { country: string; flag: string },
  flagsPool: { country: string; flag: string }[]
) => {
  // Remove the correct flag from the pool
  const pool = flagsPool.filter(f => f.country !== correctFlag.country);

  // Shuffle pool
  const shuffledPool = pool.sort(() => 0.5 - Math.random());

  // Always include correct country
  const choices = [correctFlag.country];

  // Add up to 3 more unique wrong countries (or fewer if not enough left)
  for (let i = 0; i < shuffledPool.length && choices.length < 4; i++) {
    choices.push(shuffledPool[i].country);
  }

  // Shuffle final choices so correct flag isn't always first
  return { choices: choices.sort(() => Math.random() - 0.5) };
};




