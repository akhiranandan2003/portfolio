
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  linkedInUrl: string;
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
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150); // Staggered reveal
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
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
      className={`transition-all duration-700 transform ${isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-10'}`}
    >
      <Card className="h-full card-hover">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{company}</p>
        </CardContent>
        <CardFooter className="flex justify-between flex-wrap gap-2">
          <Button variant="outline" size="sm" className="group" asChild>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Link className="mr-2 h-4 w-4 group-hover:text-blue-600 transition-colors" />
              LinkedIn Post
            </a>
          </Button>
          
          {certificateUrl && (
            <Button variant="secondary" size="sm" className="group" asChild>
              <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                <span className="group-hover:text-gradient-violet transition-colors">Certificate</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title text-center">Experience</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ExperienceCard 
          title="AI & Machine Learning Intern" 
          company="Infosys Springboard" 
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_aiprojects-infosysinternship-engineeringmindset-share-7421905951886286848-K17r/"
          certificateUrl="https://drive.google.com/file/d/1n-N_gRI6PtyGeKRxwKudNfX-f3qESvmz/view?usp=sharing"
          index={0}
        />
        
        <ExperienceCard 
          title="Full Stack Development Intern" 
          company="SmartBridge Foundation" 
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_mernstack-fullstackdevelopment-webdevelopment-activity-7439236085878251520-XCz6/"
          certificateUrl="https://drive.google.com/file/d/1FMm4WXQjLEJyAP0jOKieI0LsdSfwyNrU/view?usp=sharing"
          index={1}
        />
        
        <ExperienceCard 
          title="Salesforce Developer Intern" 
          company="SmartBridge Foundation" 
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_salesforce-smartbridge-aicte-activity-7361139123081957376-nQr4/"
          certificateUrl="https://drive.google.com/file/d/1JZ0cdQOYt2N2hD9g4eeLs0648kbTqEIS/view?usp=drive_link"
          index={2}
        />
        
        <ExperienceCard 
          title="Green Intern (Salesforce & Tableau)" 
          company="1M1B Foundation" 
          certificateUrl="https://drive.google.com/file/d/1JUbR_Ho-_RsfRott4arEyS80hWLNvvG9/view?usp=sharing"
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_aicte-salesforce-drbuddhachandrasekhar-activity-7368906013250420737-aWSG/"
          index={3}
        />

        <ExperienceCard 
          title="AI & Cloud Intern" 
          company="Edunet Foundation" 
          certificateUrl="https://drive.google.com/file/d/1j5FOspv-91se2KivBfk4YptNW0eulqJM/view?usp=drive_link"
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_ai-cloudcomputing-ibm-activity-7214464484285849602-vKx-/"
          index={4}
        />

        <ExperienceCard 
          title="Data Analytics Intern" 
          company="Vodafone Idea Foundation" 
          certificateUrl="https://drive.google.com/file/d/1JEQBueLFJZCYnduKTYPTOTZK94_5HuHn/view?usp=sharing"
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_powerbi-dataanalysis-businessintelligence-activity-7232724140271550464-xLuz/"
          index={5}
        />

        <ExperienceCard 
          title="Front End Development Intern" 
          company="Edunet Foundation (IBM SkillsBuild)" 
          certificateUrl="/certificates/Edunet_Foundation_FED_Internship_Certificate.pdf"
          linkedInUrl="https://www.linkedin.com/posts/akhira-nandan-thota-653b87290_frontenddevelopment-webdesign-ibm-activity-7230219558899302401-qRWp/"
          index={6}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;