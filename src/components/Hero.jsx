import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <img
        src={profile}
        alt="Amit Shah"
        className="w-32 h-32 rounded-full object-cover mb-6"
      />
      <h2 className="text-5xl font-bold mb-4">
        Hi, I'm Amit Shah
      </h2>

      <p className="text-xl text-gray-600 mb-6">
        Full Stack Developer & AI Enthusiast
      </p>

      <p className="max-w-2xl text-gray-500 mb-8">
        Passionate about building web applications,
        AI-powered tools, and solving real-world problems
        through technology.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
  <a
    href="/resume.pdf"
    download
    className="bg-black text-white px-6 py-3 rounded-lg"
  >
    Resume
  </a>

  <a
    href="https://github.com/amitshahworks"
    target="_blank"
    rel="noopener noreferrer"
    className="border px-6 py-3 rounded-lg"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/amitshahstack"
    target="_blank"
    rel="noopener noreferrer"
    className="border px-6 py-3 rounded-lg"
  >
    LinkedIn
  </a>
</div>
    </section>
  );
}

export default Hero;