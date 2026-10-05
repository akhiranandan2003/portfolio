import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2023 — Internal Hackathon",
    organization: "Kakatiya Institute of Technology & Science, Warangal",
    description:
      "Participated in the Internal Hackathon for Smart India Hackathon (SIH-2023) on September 8, 2023. Presented a solution on the Tourism theme addressing Problem Statement SIH1486.",
    certificateUrl: "/achievements/SIH_2023_Certificate.jpg",
  },
  {
    title: "Sumshodini’22 — WARTECH",
    organization: "Kakatiya Institute of Technology & Science, Warangal",
    description:
      "Participated in WARTECH during Sumshodini’22, a national-level technical symposium, conducted on November 18–19, 2022.",
    certificateUrl: "/achievements/Sumshodini_WARTECH_Certificate.jpg",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title text-center">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {achievements.map((achievement, index) => (
          <Card key={index} className="h-full min-h-[300px] card-hover">
            <CardHeader>
              <CardTitle className="text-xl leading-tight">
                {achievement.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col h-full">
              <p className="text-muted-foreground mb-3">
                {achievement.organization}
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-auto">
                <Button variant="secondary" size="sm" asChild>
                  <a
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview Certificate →
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
