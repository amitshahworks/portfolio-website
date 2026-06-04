function Experience() {
  const experiences = [
    {
      title: "IBM SkillsBuild Internship",
      subtitle: "Data Analytics Internship",
      description:
        "Completed a 6-week internship focused on Data Analytics, data visualization, and industry-oriented learning through IBM SkillsBuild.",
    },
    {
      title: "CodeX 2.0 Hackathon",
      subtitle: "Team SINQ-X",
      description:
        "Participated in a 36-hour hackathon and developed innovative AI-powered solutions with a team under the Open Innovation category.",
    },
  ];

  const certifications = [
    "AWS Academy Graduate - Introduction to Cloud",
    "IBM SkillsBuild Data Analytics Certificate",
    "NPTEL Software Engineering - Prof. Rajib Mall",
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience & Certifications
      </h2>

      {/* Experience */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6">
          Experience
        </h3>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="
                border
                rounded-xl
                p-6
                shadow-md
                hover:shadow-xl
                transition
              "
            >
              <h4 className="text-xl font-bold">
                {exp.title}
              </h4>

              <p className="text-blue-600 font-medium mb-2">
                {exp.subtitle}
              </p>

              <p className="text-gray-600">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">
          Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="
                border
                rounded-xl
                p-4
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;