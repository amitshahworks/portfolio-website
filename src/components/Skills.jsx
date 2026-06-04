function Skills() {
  const skills = [
    "Java",
    "DSA",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;