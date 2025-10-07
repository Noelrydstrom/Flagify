// src/hooks/useSettings.ts
import { useState, useEffect } from "react";
import { loadSettings, saveSettings, defaultSettings } from "../utils/settingsStorage/settingsStorage";

export const useSettings = () => {
  const [settings, setSettings] = useState(loadSettings() || defaultSettings);

  useEffect(() => {
    saveSettings(settings); // persist any changes
  }, [settings]);

  return [settings, setSettings] as const;
};
