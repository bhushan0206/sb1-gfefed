"use client";

import { useEffect, useState } from "react";
import { useReadingSettings } from "@/contexts/reading-settings-context";

interface ReadingWindowProps {
  text: string;
  isPlaying: boolean;
}

export function ReadingWindow({ text, isPlaying }: ReadingWindowProps) {
  const { settings } = useReadingSettings();
  const [currentChunk, setCurrentChunk] = useState("");
  const [chunks, setChunks] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const words = text.split(" ");
    const newChunks = [];
    for (let i = 0; i < words.length; i += settings.chunkSize) {
      newChunks.push(words.slice(i, i + settings.chunkSize).join(" "));
    }
    setChunks(newChunks);
  }, [text, settings.chunkSize]);

  useEffect(() => {
    if (!isPlaying) {
      setCurrentIndex(0);
      setCurrentChunk("");
      return;
    }

    const interval = setInterval(() => {
      if (currentIndex < chunks.length) {
        setCurrentChunk(chunks[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentChunk("");
        setCurrentIndex(0);
      }
    }, (60000 / settings.wpm));

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, chunks, settings.wpm]);

  const containerStyle = {
    width: `${settings.windowSize.width}px`,
    height: `${settings.windowSize.height}px`,
    backgroundColor: settings.backgroundColor,
    color: settings.fontColor,
    fontSize: `${settings.fontSize}px`,
    textAlign: settings.alignment as any,
  };

  return (
    <div 
      className="mx-auto border rounded-xl shadow-lg flex items-center justify-center overflow-hidden backdrop-blur-sm transition-colors"
      style={containerStyle}
    >
      <div className="p-4 transition-opacity duration-200">
        {currentChunk}
      </div>
    </div>
  );
}