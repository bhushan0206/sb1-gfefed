import { TextInput } from "@/components/text-input";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Reading Speed Improvement</h1>
      <p className="text-lg text-center mb-12 text-muted-foreground">
        Enhance your reading speed with our interactive tool. Paste your text below or use our sample text to get started.
      </p>
      <TextInput />
    </div>
  );
}