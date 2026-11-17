import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaNodeJs,
  FaServer,
  FaTasks,
  FaClock,
  FaGitAlt,
  FaGithub,
  FaShieldAlt,
  FaCheckCircle,
  FaUserShield,
  FaCogs
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiJsonwebtokens,
  SiRazorpay,
  SiRedis,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiSupabase,
  SiPostman
} from "react-icons/si";

export default function Skill() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400 text-2xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
        { name: "Responsive UI/UX", icon: <FaMobileAlt className="text-emerald-400 text-2xl" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300 text-2xl" /> },
        { name: "REST APIs", icon: <FaServer className="text-blue-400 text-2xl" /> },
        { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-pink-500 text-2xl" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-500 text-2xl" /> },
        { name: "BullMQ", icon: <FaTasks className="text-amber-400 text-2xl" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500 text-2xl" /> },
        { name: "Cron Jobs", icon: <FaClock className="text-indigo-400 text-2xl" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
        { name: "Mongoose", icon: <SiMongoose className="text-red-500 text-2xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500 text-2xl" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-400 text-2xl" /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-2xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400 text-2xl" /> },
        { name: "Permit.io", icon: <FaShieldAlt className="text-purple-400 text-2xl" /> },
        { name: "API Testing", icon: <FaCheckCircle className="text-green-400 text-2xl" /> },
        { name: "RBAC", icon: <FaUserShield className="text-cyan-400 text-2xl" /> },
        { name: "CI/CD", icon: <FaCogs className="text-blue-400 text-2xl" /> },
      ],
    }
  ];

  return (
    <section name="Skills" className="hero-bg py-28 bg-[#0f172a] text-white">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-semibold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build scalable
            web applications.
          </p>

        </motion.div>

        {/* SKILL GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111c3a] border border-gray-700 p-6 rounded-xl hover:border-cyan-400 transition"
            >

              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    {skill.icon}

                    <span>{skill.name}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}