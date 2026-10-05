import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "SwiftVisa – AI Visa Eligibility Screening Agent",
    description: "AI-powered visa eligibility screening system using Retrieval-Augmented Generation (RAG), integrating LangChain with the Google Gemini API and semantic document retrieval for accurate, rule-validated eligibility assessments.",
    githubUrl: "https://github.com/akhiranandan2003/ai-powered-visa-eligibility-screening",
    liveUrl: "https://akhiranandan2003.github.io/ai-powered-visa-eligibility-screening/",
    tags: ["RAG", "LangChain", "Gemini API"]
  },
  {
    title: "Arduino Based Fire Fighting Robot",
    description: "Autonomous fire-fighting robot integrating flame sensors, Arduino Uno, motor drivers, and water pump modules with sensor-based navigation and automatic suppression logic.",
    githubUrl: "https://github.com/akhiranandan2003/Arduino-Based-Fire-Fighting-Robot",
    tags: ["Arduino", "Robotics", "IoT"]
  },
  {
    title: "Personal Developer Portfolio",
    description: "Responsive developer portfolio showcasing my software engineering skills, projects, internships, certifications, achievements, and technical experience.",
    githubUrl: "https://github.com/akhiranandan2003/portfolio",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <Card className="h-full card-hover">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="badge bg-accent/50 text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 flex-wrap">
          <Button variant="outline" size="sm" className="group" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover:text-black transition-colors" />
              GitHub
            </a>
          </Button>
          
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="group" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 transition-colors" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
