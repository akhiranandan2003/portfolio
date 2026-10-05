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
        <Card key={index} className="h-full min-h-[300px] card-hover group">
          <CardHeader><CardTitle className="text-xl leading-tight">{achievement.title}</CardTitle></CardHeader>
          <CardContent className="flex flex-col h-full">
            <p className="text-muted-foreground mb-3">{achievement.organization}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{achievement.description}</p>
            <div className="mt-auto flex justify-end"><a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center px-2 text-xs text-muted-foreground/80 opacity-100 sm:opacity-0 sm:translate-y-1 sm:pointer-events-none transition-all duration-200 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:pointer-events-auto focus:opacity-100 focus:translate-y-0 focus:pointer-events-auto">View Credential →</a></div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
export default AchievementsSection;