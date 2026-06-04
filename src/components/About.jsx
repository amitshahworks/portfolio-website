function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 max-w-6xl mx-auto"
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            Hi, I'm <span className="font-semibold">Amit Shah</span>,
            a B.Tech Computer Science student at Silver Oak College of
            Technology and Engineering (SOCET).
          </p>

          <p>
            I am passionate about software development, problem solving,
            and building impactful technology solutions.
          </p>

          <p>
            Currently, I am learning Java Data Structures & Algorithms,
            Full Stack Web Development, and Artificial Intelligence
            applications.
          </p>

          <p>
            I enjoy creating real-world projects, participating in
            hackathons, and continuously improving my development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-5 border rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Education</h3>
            <p>B.Tech Computer Science Engineering</p>
            <p>SOCET, Silver Oak University</p>
          </div>

          <div className="p-5 border rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Current Focus</h3>
            <p>Java DSA</p>
            <p>React & Node.js</p>
            <p>AI-Powered Applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;