export default function About() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About</h1>
      </section>

      <section
        id="testimonials"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <h2 className="text-4xl font-bold">Testimonials</h2>
      </section>

      <section
        id="articles"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Articles</h2>
      </section>
    </main>
  );
}
