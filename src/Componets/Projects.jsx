import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      name: "Employee Tracker Platform",
      company: "Mindstocs",
      description:
        "A multi-panel employee management platform supporting Super Admin, Company Admin, HR Admin, Manager, Employee, and Client roles.",
      impact: "Automated attendance workflows with face recognition, fingerprint, card verification, and geolocation",
      process: [
        "Multi-panel employee management supporting Super Admin, Company Admin, HR Admin, Manager, Employee, and Client roles",
        "Built attendance workflows using Face Recognition, Fingerprint, and Card-based attendance with geolocation and liveness verification",
        "Integrated Razorpay payment gateway for online payment processing and transaction verification",
        "Handled end-to-end R&D, feature planning, workflow design, and development across employee, attendance, leave, and administrative modules",
      ],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS", "BullMQ"],
      link: "https://employee-trackerreyaz.vercel.app/",
      type: "client"
    },

    {
      name: "Edudibon School ERP",
      company: "Yahweh Software Solutions",
      description:
        "A comprehensive school ERP system with multi-panel backend functionality and role-based access control.",
      impact: "Streamlined school administration across Exam, Communication, Visitor, and Disciplinary modules",
      process: [
        "Developed backend functionality for Super Admin, Admin, HR Admin, and Employee panels across multiple ERP modules",
        "Worked on Exam Management, Communication, Visitor Management, and Disciplinary modules with role-based authorization",
        "Implemented REST APIs, business logic, Permit.io authorization, and Cron-based workflows",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Permit.io", "Cron Jobs"],
      link: "https://www.edudibon.co.in/V2/login-page/",
      type: "client"
    },

    {
      name: "E-Shop",
      company: "Internshala",
      description:
        "A MERN-based garments e-commerce platform with Admin, Customer, and Delivery Agent panels.",
      impact: "Integrated payment processing and end-to-end product, order, and delivery workflows",
      process: [
        "Developed a MERN-based garments e-commerce platform with Admin, Customer, and Delivery Agent panels",
        "Integrated Razorpay payment gateway for online payment processing and transaction verification",
        "Implemented product, customer, order, and delivery workflows using REST APIs and MongoDB",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "REST APIs"],
      link: "https://e-shop-beta-eight.vercel.app/",
      type: "client"
    },

    {
      name: "Mindstocs Studio",
      company: "Mindstocs Studio",
      description:
        "A modern, responsive marketing frontend built with React, Vite, and Tailwind CSS. Features interactive landing pages, service showcases, dark mode aesthetics, and client-side routing for an enterprise digital studio.",
      impact: "Built a fast, accessible, and responsive marketing platform with fluid motion effects and modular UI components",
      process: [
        "Built responsive, mobile-first UI layouts using Tailwind CSS with dark mode aesthetics",
        "Implemented smooth scroll reveals, interactive carousels, and transitions using Framer Motion",
        "Structured modular, component-based architecture with reusable layout, UI, and section components",
        "Integrated multi-page client-side routing and SEO meta tag management using React Router and React Helmet",
      ],
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Router"
      ],
      link: "https://mind-stocs.vercel.app/",
      type: "client"
    }
  ];

  return (
    <section name="Projects" className="hero-bg py-28 bg-[#0f172a] text-white">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            Client <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production-level applications developed across employee management,
            ERP, and e-commerce domains.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#111c3a] border border-gray-700 p-8 rounded-xl 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] 
              hover:scale-[1.02] 
              transition duration-300"
            >

              {/* TAGS */}
              <div className="flex gap-2 mb-2">
                {index === 0 && (
                  <span className="text-xs text-cyan-400 border border-cyan-400 px-2 py-1 rounded">
                    🚀 Featured
                  </span>
                )}

                {project.type === "client" && (
                  <span className="text-xs text-green-400 border border-green-400 px-2 py-1 rounded">
                    💼 Client Project
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {project.company}
              </p>

              <p className="text-gray-300 mb-3">
                {project.description}
              </p>

              <p className="text-sm text-cyan-400 mb-4">
                ✔ {project.impact}
              </p>

              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                {project.process.map((step, i) => (
                  <li key={i}>• {step}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                >
                  Live Project →
                </a>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}