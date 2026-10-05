import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  linkedInUrl?: string;
  certificateUrl?: string;
  index: number;
}

const ExperienceCard = ({ title, company, linkedInUrl, certificateUrl, index }: ExperienceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 transform ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}`}
    >
      <Card className="h-full flex flex-col card-hover">
        <CardHeader>
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-muted-foreground">{company}</p>
        </CardContent>

        {(certificateUrl || linkedInUrl) && (
          <CardFooter className="flex flex-col sm:flex-row gap-2 pt-0">
            {certificateUrl && (
              <Button variant="default" size="sm" className="w-full sm:w-auto" asChild>
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Preview Certificate
                </a>
              </Button>
            )}

            {linkedInUrl && (
              <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn Post
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title text-center">Experience</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ExperienceCard title="AI & Machine Learning Intern" company="Infosys Springboard" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_aiprojects-infosysinternship-engineeringmindset-share-7421905951886286848-K17r/" certificateUrl="https://drive.google.com/file/d/1n-N_gRI6PtyGeKRxwKudNfX-f3qESvmz/view?usp=sharing" index={0} />
        <ExperienceCard title="Full Stack Development Intern" company="SmartBridge Foundation" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_mernstack-fullstackdevelopment-webdevelopment-activity-7439236085878251520-XCz6/" certificateUrl="https://drive.google.com/file/d/1FMm4WXQjLEJyAP0jOKieI0LsdSfwyNrU/view?usp=sharing" index={1} />
        <ExperienceCard title="Salesforce Developer Intern" company="SmartBridge Foundation" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_salesforce-smartbridge-aicte-activity-7361139123081957376-nQr4/" certificateUrl="https://drive.google.com/file/d/1JZ0cdQOYt2N2hD9g4eeLs0648kbTqEIS/view?usp=drive_link" index={2} />
        <ExperienceCard title="Green Intern (Salesforce & Tableau)" company="1M1B Foundation" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_aicte-salesforce-drbuddhachandrasekhar-activity-7368906013250420737-aWSG/" certificateUrl="https://drive.google.com/file/d/1JUbR_Ho-_RsfRott4arEyS80hWLNvvG9/view?usp=sharing" index={3} />
        <ExperienceCard title="AI & Cloud Intern" company="Edunet Foundation" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_ai-cloudcomputing-ibm-activity-7214464484285849602-vKx-/" certificateUrl="https://drive.google.com/file/d/1j5FOspv-91se2KivBfk4YptNW0eulqJM/view?usp=drive_link" index={4} />
        <ExperienceCard title="Data Analytics Intern" company="Vodafone Idea Foundation" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_powerbi-dataanalysis-businessintelligence-activity-7232724140271550464-xLuz/" certificateUrl="https://drive.google.com/file/d/1JEQBueLFJZCYnduKTYPTOTZK94_5HuHn/view?usp=sharing" index={5} />
        <ExperienceCard title="Front End Development Intern" company="Edunet Foundation (IBM SkillsBuild)" linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_frontenddevelopment-webdesign-ibm-activity-7230219558899302401-qRWp/" certificateUrl="/certificates/Edunet_Foundation_FED_Internship_Certificate.pdf" index={6} />
        <ExperienceCard title="Java Programming Intern" company="KITSW — CSE (Networks) & C-PRE" certificateUrl="https://drive.google.com/file/d/1OsLZFBO_TYbHGvpLT4AL4mMVkpSRG2lt/view?usp=drive_link" index={7} />
      </div>
    </section>
  );
};

export default ExperienceSection;
