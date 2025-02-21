import { LazyLoadImage } from "react-lazy-load-image-component";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  skills,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full transition-all duration-300 group rounded-lg mb-14 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:dark:group-hover:bg-slate-800/50 lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div className="grid md:grid-cols-[1fr_3fr] md:items-start gap-4">
            <div className="order-1 md:order-none">
              <LazyLoadImage
                className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt={title}
                height={48}
                src={image}
                width={200}
              />
            </div>
            <div className="flex flex-col h-full z-10">
              <div className="flex-grow">
                <h3 className="font-semibold tracking-tight mb-1 transition-colors group-hover:text-sky-400 flex items-center gap-1">
                  {title}
                  <ArrowRight className="w-4 h-4 transition-colors text-muted-foreground group-hover:text-sky-400 group-hover:translate-x-1 inline-block" />
                </h3>
                <p className="text-muted-foreground leading-normal text-sm">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill: string) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
