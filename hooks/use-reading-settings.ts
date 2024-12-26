"use client";

import { useState } from "react";

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

const DEFAULT_SETTINGS: ReadingSettings = {
  wpm: 300,
  windowSize: { width: 600, height: 400 },
  chunkSize: 1,
  fontSize: 40,
  fontColor: "#000000",
  backgroundColor: "#f0f0f0",
  alignment: "center",
};

export function useReadingSettings() {
  const [settings, setSettings] = useState<ReadingSettings>(DEFAULT_SETTINGS);

  const updateSettings = (updates: Partial<ReadingSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return {
    settings,
    updateSettings,
    resetSettings,
  };
}