export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          We'd love to hear from you! Whether you have questions, feedback, or suggestions for improvement, please don't hesitate to reach out.
        </p>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2">
            <li>Email: support@readfast.com</li>
            <li>Twitter: @ReadFastApp</li>
            <li>GitHub: github.com/readfast</li>
          </ul>
        </div>
      </div>
    </div>
  );
}