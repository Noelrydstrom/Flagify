import React, { Suspense, lazy, type ComponentType } from "react";
import "./index.css";
import { MainContent } from "./index";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { SettingsPage } from "./pages/Settings/SettingsPage";

// Automatically import all components in AutoLoad
const autoComponents = import.meta.glob<{ default: ComponentType<unknown> }>(
  "./components/AutoLoad/*/index.tsx"
);

const App: React.FC = () => {
  return (
    <MainContent>
      <div className="bg-white min-h-screen flex">
        {/* Fixed sidebar */}
        <Navbar />

        {/* Main content */}
        <main style={{ flex: 1, padding: "2rem", marginLeft: "250px" }}>
          <Routes>
            {/* Home route */}
            <Route path="Home" element={<HomePage />} />
            <Route path="Profile" element={<ProfilePage />} />
            <Route path="Settings" element={<SettingsPage />} />

            {/* Auto-loaded components route */}
            <Route
              path="/components"
              element={
                <Suspense fallback={<div>Loading components...</div>}>
                  {Object.entries(autoComponents).map(([path, loader]) => {
                    const Component = lazy(() => loader());
                    return <Component key={path} />;
                  })}
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </MainContent>
  );
};

export default App;
