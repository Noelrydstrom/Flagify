// src/pages/SettingsPage.tsx
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Header,
  SubHeader,
  Card,
  CardTitle,
  Footer,
  Button,
  Input,
} from "./styles";
import { loadSettings, saveSettings, defaultSettings } from "../../utils/settingsStorage/settingsStorage";
import type { SettingsState } from "../../utils/settingsStorage/settingsStorage";
import SettingItem from "../../components/SettingItem/SettingItem";
import Toggle from "../../components/Toggle/Toggle";

const SettingsPage: FC = () => {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [dirty, setDirty] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // load once
  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  // apply dark mode simply by setting data-theme; you can hook into ThemeProvider instead
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [settings.darkMode]);

  function update<K extends keyof SettingsState>(key: K, value: SettingsState[K]) {
    setSettings((prev) => {
      const next = { ...prev, [key]: value } as SettingsState;
      setDirty(true);
      return next;
    });
  }

  function handleSave() {
    // tiny validation example
    if (!settings.username.trim()) {
      alert("Username is required.");
      return;
    }

    saveSettings(settings);
    setDirty(false);
    const ts = new Date().toLocaleTimeString();
    setSavedAt(ts);
    setTimeout(() => setSavedAt(null), 3000);
  }

  function handleReset() {
    // reset to defaults locally (confirm UX)
    if (!confirm("Reset settings to defaults?")) return;
    setSettings(defaultSettings);
    setDirty(true);
  }

  return (
    <Container>
      <Header>Settings</Header>
      <SubHeader>Manage account, appearance and notifications.</SubHeader>

      <Card aria-labelledby="account-title">
        <CardTitle id="account-title">Account</CardTitle>
        <SettingItem
          title="Username"
          description="This name will be visible to other users."
        >
          <Input
            value={settings.username}
            onChange={(e) => update("username", e.target.value)}
            aria-label="username"
          />
        </SettingItem>

        <SettingItem title="Email" description="Where we send transactional emails.">
          <Input
            type="email"
            value={settings.email}
            onChange={(e) => update("email", e.target.value)}
            aria-label="email"
          />
        </SettingItem>
      </Card>

      <Card aria-labelledby="appearance-title">
        <CardTitle id="appearance-title">Appearance</CardTitle>

        <SettingItem
          title="Dark mode"
          description="Reduce eye strain in low light environments."
          control={
            <Toggle
              id="dark-mode-toggle"
              checked={settings.darkMode}
              onChange={(v) => update("darkMode", v)}
              ariaLabel="Toggle dark mode"
            />
          }
        />
      </Card>

      <Card aria-labelledby="notifications-title">
        <CardTitle id="notifications-title">Notifications</CardTitle>

        <SettingItem
          title="Email notifications"
          description="Receive important updates by email."
          control={
            <Toggle
              id="email-notif-toggle"
              checked={settings.emailNotifications}
              onChange={(v) => update("emailNotifications", v)}
              ariaLabel="Toggle email notifications"
            />
          }
        />
      </Card>

      <Footer>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={handleSave} disabled={!dirty}>
          Save{savedAt ? ` • saved ${savedAt}` : ""}
        </Button>
      </Footer>
    </Container>
  );
};

export default SettingsPage;
