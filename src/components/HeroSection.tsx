import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const contactButtons = [
    {
      label: "Resume",
      href: "/Akhira_Nandan_Thota_Resume.pdf",
      icon: <HiOutlineDocumentDownload className="text-lg" />,
      tooltip: "Download Resume",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akhira-nandan-thota-653b87290/",
      icon: <FaLinkedin className="text-lg text-cyan-400" />,
      tooltip: "View LinkedIn",
      external: true,
    },
    {
      label: "Mail",
      href: "mailto:akhiranandanthota@gmail.com",
      icon: <MdEmail className="text-lg text-rose-400" />,
      tooltip: "Mail me",
      external: false,
    },
    {
      label: "Call",
      href: "tel:+918688485414",
      icon: <FiPhone className="text-lg text-emerald-400" />,
      tooltip: "Call me",
      external: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/akhiranandan2003",
      icon: <FaGithub className="text-lg text-slate-200" />,
      tooltip: "See my GitHub",
      external: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background text-center"
    >
      <motion.div
        className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-border shadow-2xl shadow-primary/10 mb-6 animate-float"
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/lovable-uploads/a49484c4-46ea-4ade-8473-ef9001bb8eb8.png"
          alt="Akhira Nandan Thota"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Hi, I am <span className="gradient-text">Akhira Nandan Thota</span>
      </motion.h1>

      <motion.div
        className="text-2xl sm:text-3xl text-muted-foreground mb-6 min-h-[3rem]"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Computer Science & Engineering Graduate",
              "AI & Machine Learning Enthusiast",
              "Full Stack Developer",
              "Salesforce Developer"
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 40
          }}
        />
      </motion.div>

      <motion.p
        className="max-w-2xl text-muted-foreground mb-8 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Computer Science & Engineering graduate and aspiring Software Engineer with internship experience in Artificial Intelligence, Machine Learning, Data Science, Salesforce, and Software Development, passionate about building intelligent, scalable, and data-driven software solutions.
      </motion.p>

      <motion.div
        className="flex gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button variant="default" size="lg" asChild>
          <a
            href="/Akhira_Nandan_Thota_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a
            href="https://www.linkedin.com/in/akhira-nandan-thota-653b87290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4 text-cyan-400" />
            LinkedIn
          </a>
        </Button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {contactButtons.map((button, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  aria-label={button.tooltip}
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md shadow-md bg-card border border-border hover:bg-muted text-sm transition-colors duration-300">
                    {button.icon}
                    {button.label}
                  </button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{button.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
