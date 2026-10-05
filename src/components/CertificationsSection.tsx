
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  url?: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    url: "/certificates/ey ai skil;s certificate.pdf",
    icon: "🤖"
  },
  {
    title: "Python 101 for Data Science (PY0101EN)",
    issuer: "IBM / Cognitive Class",
    url: "/certificates/IBM PY0101EN Certificate _ Cognitive Class.pdf",
    icon: "🐍"
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    url: "https://drive.google.com/file/d/1jtDv7AJV9kzkyYZpNNEnjapYQqSxX52P/preview",
    icon: "🎓"
  },
  {
    title: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle",
    url: "https://drive.google.com/file/d/1TGdBDpeUyKkVvuJIEp2KB0S-CFaU3hPF/preview",
    icon: "📊"
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    url: "https://drive.google.com/file/d/1tXz3mV9FdZHjWKluI1AGYWkMTED3LKln/preview",
    icon: "🤖"
  },
  {
    title: "ServiceNow IT Leadership Professional Certificate",
    issuer: "LinkedIn Learning",
    url: "/certificates/ServiceNow_IT_Leadership_Professional_Certificate.pdf",
    icon: "💼"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    url: "/certificates/Career_Essentials_in_Generative_AI.pdf",
    icon: "✨"
  },
  {
    title: "AI Future Skills Edge Program",
    issuer: "Honeywell (CSR) x BharatCares",
    url: "/certificates/Honeywell_BharatCares_AI_Program_Certificate.jpg",
    icon: "⚙️"
  }
];

const CertificationCard = ({ certification, index }: { certification: Certification; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="w-full h-[260px] card-hover gradient-bg group relative overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {certification.icon}
            </div>
            <h3 className="font-medium leading-tight">
              {certification.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-3">
              {certification.issuer}
            </p>
          </div>

          {certification.url && (
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View credential for ${certification.title}`}
              className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200"
            >
              <span className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md">
                View Credential →
              </span>
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="section-container">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
