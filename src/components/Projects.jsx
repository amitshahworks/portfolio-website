function Projects() {
  const projects = [
  {
    title: "AI Interview Trainer",
    description:
      "An AI-powered platform that simulates technical and HR interviews and provides feedback.",
    tech: "React, Node.js, MongoDB, OpenAI",
    github: "https://github.com/amitshahworks/AI-Interview-Copilot-2.0",
    demo: "#",
  },
  {
    title: "Smart Productivity AI Assistant",
    description:
      "AI assistant for task management, reminders, and productivity enhancement.",
    tech: "React, Firebase, OpenAI",
    github: "https://github.com/amitshahworks/Smart-Productivity-AI-Assistant",
    demo: "#",
  },
  {
    title: "DocumentEase",
    description:
      "A document management platform with search, categorization, and user-friendly navigation.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/amitshahworks/DocumentEase",
    demo: "#",
  },
  {
    title: "Travel Booking System",
    description:
      "A web-based travel booking platform with user and admin functionalities.",
    tech: "Java, MySQL",
    github: "https://github.com/",
    demo: "#",
  },
];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
                border
                rounded-xl
                p-6
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
                "
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {project.tech}
                </span>
            </div>

            <div className="flex gap-4">
           <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition "
            >
            GitHub
            </a>

            <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
            Live Demo
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;