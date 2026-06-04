function Projects() {
  const projects = [
    {
      title: "AI Interview Trainer",
      description:
        "An AI-powered platform that simulates technical and HR interviews and provides feedback.",
      tech: "React, Node.js, MongoDB, OpenAI",
    },
    {
      title: "Smart Productivity AI Assistant",
      description:
        "AI assistant for task management, reminders, and productivity enhancement.",
      tech: "React, Firebase, OpenAI",
    },
    {
      title: "DocumentEase",
      description:
        "A document management platform with search, categorization, and user-friendly navigation.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Travel Booking System",
      description:
        "A web-based travel booking platform with user and admin functionalities.",
      tech: "Java, MySQL",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="font-medium mb-4">
              Tech Stack: {project.tech}
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                GitHub
              </button>

              <button className="border px-4 py-2 rounded-lg">
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;