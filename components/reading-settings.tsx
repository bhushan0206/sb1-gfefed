"use client";

import { useReadingSettings } from "@/contexts/reading-settings-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Settings2 } from "lucide-react";

export function ReadingSettings() {
  const { settings, updateSettings, resetSettings } = useReadingSettings();

  const handleWpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      updateSettings({ wpm: numValue });
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-xl shadow-lg p-4">
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent">
        <div className="flex-shrink-0 w-[200px] space-y-1.5">
          <Label htmlFor="wpm" className="text-xs font-medium text-muted-foreground">Words per Minute</Label>
          <Input
            id="wpm"
            type="number"
            min="1"
            value={settings.wpm.toString()}
            onChange={handleWpmChange}
            className="h-9 transition-colors focus-visible:ring-1"
          />
        </div>

        <div className="flex-shrink-0 w-[150px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Window Size</Label>
          <Select
            value={`${settings.windowSize.width}x${settings.windowSize.height}`}
            onValueChange={(value) => {
              const [width, height] = value.split("x").map(Number);
              updateSettings({ windowSize: { width, height } });
            }}
          >
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["1000x1000", "900x700", "800x600", "700x500", "600x400"].map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-shrink-0 w-[120px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Chunk Size</Label>
          <Select
            value={settings.chunkSize.toString()}
            onValueChange={(value) => updateSettings({ chunkSize: parseInt(value) })}
          >
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((size) => (
                <SelectItem key={size} value={size.toString()}>{size} word{size > 1 ? 's' : ''}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-shrink-0 w-[120px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Font Size</Label>
          <Select
            value={settings.fontSize.toString()}
            onValueChange={(value) => updateSettings({ fontSize: parseInt(value) })}
          >
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[40, 50, 60, 70, 80].map((size) => (
                <SelectItem key={size} value={size.toString()}>{size}px</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-shrink-0 w-[120px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Font Color</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full h-9 justify-start transition-all hover:shadow-sm"
                style={{ color: settings.fontColor }}
              >
                <div 
                  className="w-4 h-4 rounded-full mr-2 ring-1 ring-border" 
                  style={{ backgroundColor: settings.fontColor }} 
                />
                <span className="text-xs opacity-50">Color</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3">
              <HexColorPicker color={settings.fontColor} onChange={(color) => updateSettings({ fontColor: color })} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex-shrink-0 w-[120px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Background</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full h-9 justify-start transition-all hover:shadow-sm"
                style={{ backgroundColor: settings.backgroundColor }}
              >
                <div 
                  className="w-4 h-4 rounded-full mr-2 ring-1 ring-border" 
                  style={{ backgroundColor: settings.backgroundColor }} 
                />
                <span className="text-xs opacity-50">Color</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3">
              <HexColorPicker color={settings.backgroundColor} onChange={(color) => updateSettings({ backgroundColor: color })} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex-shrink-0 w-[120px] space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Alignment</Label>
          <Select
            value={settings.alignment}
            onValueChange={(value) => updateSettings({ alignment: value })}
          >
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["center", "justify", "left", "right"].map((align) => (
                <SelectItem key={align} value={align}>{align}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-shrink-0 w-[120px] flex items-end">
          <Button 
            onClick={resetSettings} 
            variant="outline" 
            className="h-9 w-full transition-all hover:shadow-sm"
            size="sm"
          >
            <Settings2 className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}