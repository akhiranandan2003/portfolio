import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C/C++", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "REST APIs", "Bootstrap"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "RAG", "LangChain", "Prompt Engineering", "Pandas", "NumPy", "EDA"],
  },
  {
    title: "Salesforce",
    skills: ["Salesforce Apex", "LWC", "SOQL", "Agentforce"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "GitHub", "OCI", "GCP", "IBM Cloud"],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-container">
      <h2 className="section-title text-center mb-12">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-xl border bg-card p-6 shadow-sm card-hover"
          >
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-muted/40 px-3 py-1.5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
