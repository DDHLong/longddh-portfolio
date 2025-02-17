import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import { Glow } from "./glow";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  link: string;
}

const ExperienceCard = ({
  title,
  company,
  date,
  description,
  skills,
  link,
}: ExperienceCardProps) => {
  return (
    <li className="!mb-8">
      <a href={link} target="_blank">
        <Glow color="oklch(0.746 0.16 232.661)" className="rounded-xl">
          <Card className="w-full transition-all duration-300 bg-transparent group">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="transition-colors duration-300 hover:text-primary">
                    {title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    {company}
                    <span className="inline-block">
                      <ExternalLink className="w-4 h-4 transition-colors duration-300 group-hover:text-primary group-hover:scale-110" />
                    </span>
                  </CardDescription>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">{description}</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: string) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Glow>
      </a>
    </li>
  );
};

export default ExperienceCard;
