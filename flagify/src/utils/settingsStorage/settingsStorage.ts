// src/utils/settingsStorage.ts
export const SETTINGS_KEY = "app_settings_v1";

export type SettingsState = {
  username: string;
  email: string;
  darkMode: boolean;
  emailNotifications: boolean;
  language: string;
};

export const defaultSettings: SettingsState = {
  username: "Noel",
  email: "",
  darkMode: false,
  emailNotifications: true,
  language: "en",
};

export const loadSettings = (): SettingsState => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return defaultSettings;
    return { ...defaultSettings, ...JSON.parse(raw) } as SettingsState;
  } catch {
    return defaultSettings;
  }
};

export const saveSettings = (s: SettingsState) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    // ignore write errors for this demo
  }
};
