export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About ReadFast</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          ReadFast is a cutting-edge reading speed improvement application designed to help users enhance their reading efficiency while maintaining comprehension.
        </p>
        <p className="mb-4">
          Our application uses proven techniques in speed reading, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Customizable reading speeds</li>
          <li>Adjustable chunk sizes for different reading levels</li>
          <li>Visual comfort settings for extended practice sessions</li>
          <li>Progress tracking and performance metrics</li>
        </ul>
        <p>
          Whether you're a student looking to improve study efficiency or a professional aiming to process information faster, ReadFast provides the tools you need to achieve your reading goals.
        </p>
      </div>
    </div>
  );
}