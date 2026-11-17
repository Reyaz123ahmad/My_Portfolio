import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [

    {
      company: "Mindstocs",
      role: "Full Stack Developer",
      duration: "10 Aug 2026 – Present",
      description:
        "Developing production-ready full-stack web applications with modern frontend and backend architectures.",

      impact: "Streamlined full-stack feature delivery and background job processing",

      highlights: [
        "Developing full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Supabase",
        "Building responsive frontend features with React.js and Tailwind CSS and integrating REST APIs",
        "Working with BullMQ for background processing and asynchronous workflows"
      ],

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "BullMQ"
      ]
    },

    {
      company: "Yahweh Software Solutions",
      role: "Node.js Developer (Intern)",
      duration: "Sep 2025 – Present",
      description:
        "Engineered core backend modules and authorization systems for Edudibon School ERP and HRMS platforms.",

      impact: "Delivered 4 independent ERP modules and automated scheduled workflows",

      highlights: [
        "Completed 4 modules independently — Exam Management, Communication, Visitor Management, and Disciplinary",
        "Contributed to HRMS functionality for employee management, attendance tracking, and leave management",
        "Implemented Permit.io for role-based access control and Cron Jobs for scheduled workflows"
      ],

      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cron Jobs",
        "Permit.io",
        "REST APIs"
      ]
    },

    {
      company: "Internshala",
      role: "MERN Stack Developer Trainee",
      duration: "May – Aug 2024",
      description:
        "Completed hands-on MERN stack training building web applications with industry best practices.",

      impact: "Successfully developed end-to-end MERN projects with JWT authentication",

      highlights: [
        "Developed MERN stack projects and implemented JWT authentication and REST API best practices",
        "Built responsive user interfaces and integrated with Node.js/Express.js backend services",
        "Designed schemas and database workflows using MongoDB and Mongoose"
      ],

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT"
      ]
    }

  ];


  return (
    <section name="Experiance" className="hero-bg py-28 bg-[#0f172a] text-white">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience building production-level applications using modern full-stack technologies
            and scalable backend architectures.
          </p>
        </motion.div>


        {/* TIMELINE */}
        <div className="relative border-l border-gray-700">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 ml-8"
            >

              {/* DOT */}
              <span className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0B132B]"></span>

              {/* CARD */}
              <div className="bg-[#111c3a] border border-gray-700 p-6 rounded-xl 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] 
              hover:scale-[1.02] 
              transition duration-300">

                {/* ROLE */}
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="text-cyan-400 text-sm mb-2">
                  {exp.company} • {exp.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mb-3">
                  {exp.description}
                </p>

                {/* IMPACT */}
                <p className="text-sm text-cyan-400 mb-4">
                  ✔ {exp.impact}
                </p>

                {/* HIGHLIGHTS */}
                <ul className="text-gray-400 text-sm space-y-1 mb-4">
                  {exp.highlights.slice(0, 4).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}