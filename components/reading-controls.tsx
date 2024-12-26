"use client";

import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { ReadingSettings } from "./reading-settings";

interface ReadingControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onRestart: () => void;
}

export function ReadingControls({
  isPlaying,
  onPlayPause,
  onRestart,
}: ReadingControlsProps) {
  return (
    <div className="space-y-6">
      <ReadingSettings />
      <div className="flex justify-center space-x-4">
        <Button 
          onClick={onPlayPause} 
          size="lg"
          className="min-w-[120px] transition-all hover:shadow-md"
          variant={isPlaying ? "secondary" : "default"}
        >
          {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isPlaying ? "Pause" : "Start"}
        </Button>
        <Button 
          onClick={onRestart} 
          variant="outline" 
          size="lg"
          className="min-w-[120px] transition-all hover:shadow-md"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Restart
        </Button>
      </div>
    </div>
  );
}