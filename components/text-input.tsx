"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const DEFAULT_TEXT = `The art of reading quickly while maintaining comprehension is a valuable skill in today's fast-paced world. Speed reading techniques, when practiced regularly, can significantly improve your reading efficiency. The key is to focus on expanding your visual span and reducing subvocalization. With dedication and the right tools, anyone can enhance their reading speed while retaining important information.`;

export function TextInput() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/read?text=${encodeURIComponent(text)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        className="min-h-[200px]"
      />
      <div className="flex justify-center">
        <Button type="submit" size="lg">
          Read & Shine
        </Button>
      </div>
    </form>
  );
}