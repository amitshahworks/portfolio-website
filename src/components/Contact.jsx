function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-8">
        Contact Me
      </h2>

      <p className="text-lg mb-8 text-center max-w-xl">
        I'm always open to discussing projects, internships,
        collaborations, and new opportunities.
      </p>

      <div className="space-y-4 text-center">
        <p>
          📧 Email: shahamitsuresh@gmail.com
        </p>

        <p>
          💻 GitHub: github.com/amitshahworks
        </p>

        <p>
          🔗 LinkedIn: linkedin.com/in/amitshahstack
        </p>
      </div>
    </section>
  );
}

export default Contact;