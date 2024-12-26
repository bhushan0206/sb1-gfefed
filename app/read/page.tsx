"use client";

import { useSearchParams } from "next/navigation";
import { ReadingWindow } from "@/components/reading-window";
import { ReadingControls } from "@/components/reading-controls";
import { useState } from "react";
import Link from "next/link";
import { ReadingSettingsProvider } from "@/contexts/reading-settings-context";

export default function ReadPage() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || DEFAULT_TEXT;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ReadingSettingsProvider>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-center">Reading Test</h1>
          <ReadingControls 
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onRestart={() => setIsPlaying(false)}
          />
        </div>
        <ReadingWindow text={text} isPlaying={isPlaying} />
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-primary hover:underline"
          >
            ← Back to Text Input
          </Link>
        </div>
      </div>
    </ReadingSettingsProvider>
  );
}

const DEFAULT_TEXT = `The art of reading quickly while maintaining comprehension is a valuable skill in today's fast-paced world. Speed reading techniques, when practiced regularly, can significantly improve your reading efficiency. The key is to focus on expanding your visual span and reducing subvocalization. With dedication and the right tools, anyone can enhance their reading speed while retaining important information.`;