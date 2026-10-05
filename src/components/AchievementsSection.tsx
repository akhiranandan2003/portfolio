import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const achievements = [
  { title: "Smart India Hackathon (SIH) 2023 — Internal Hackathon", organization: "Kakatiya Institute of Technology & Science, Warangal", description: "Participated in the Internal Hackathon for Smart India Hackathon (SIH-2023) on September 8, 2023. Presented a solution on the Tourism theme addressing Problem Statement SIH1486.", certificateUrl: "/achievements/SIH_2023_Certificate.jpg" },
  { title: "Sumshodini’22 — WARTECH", organization: "Kakatiya Institute of Technology & Science, Warangal", description: "Participated in WARTECH during Sumshodini’22, a national-level technical symposium, conducted on November 18–19, 2022.", certificateUrl: "/achievements/Sumshodini_WARTECH_Certificate.jpg" },
];
const AchievementsSection = () => (
  <section id="achievements" className="section-container">
    <h2 className="section-title text-center">Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {achievements.map((achievement,index)=>(
        <Card key={index} className="relative h-full min-h-[300px] card-hover group overflow-hidden">
          <CardHeader><CardTitle className="text-xl leading-tight">{achievement.title}</CardTitle></CardHeader>
          <CardContent className="flex flex-col h-full">
            <p className="text-muted-foreground mb-3">{achievement.organization}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{achievement.description}</p>
          </CardContent>
          <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`View credential for ${achievement.title}`}
             className="absolute bottom-4 right-4 z-10 inline-flex items-center px-2 py-1 text-xs text-muted-foreground bg-background/90 rounded-md shadow-sm opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
            View Credential →
          </a>
        </Card>
      ))}
    </div>
  </section>
);
export default AchievementsSection;