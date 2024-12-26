"use client";

import React, { createContext, useContext, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

interface ReadingSettings {
  wpm: number;
  windowSize: WindowSize;
  chunkSize: number;
  fontSize: number;
  fontColor: string;
  backgroundColor: string;
  alignment: string;
}

interface ReadingSettingsContextType {
  settings: ReadingSettings;
  updateSettings: (updates: Partial<ReadingSettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: ReadingSettings = {
  wpm: 100,
  windowSize: { width: 600, height: 400 },
  chunkSize: 1,
  fontSize: 40,
  fontColor: "#000000",
  backgroundColor: "#f0f0f0",
  alignment: "center",
};

const ReadingSettingsContext = createContext<ReadingSettingsContextType | undefined>(undefined);

export function ReadingSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<ReadingSettings>(DEFAULT_SETTINGS);

  const updateSettings = (updates: Partial<ReadingSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <ReadingSettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </ReadingSettingsContext.Provider>
  );
}

export function useReadingSettings() {
  const context = useContext(ReadingSettingsContext);
  if (context === undefined) {
    throw new Error("useReadingSettings must be used within a ReadingSettingsProvider");
  }
  return context;
}