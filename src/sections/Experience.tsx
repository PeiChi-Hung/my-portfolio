import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Top Grade",
    period: "Mar 2025 - Present",
    description:
      "Contributed to the development of Top Grade, an edtech platform, by implementing responsive UI components and assisting in debugging and performance optimization across web and mobile.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    title: "Front End Intern",
    company: "Empathetic AI",
    period: "July 2024 - Aug 2024",
    description:
      " Developed, refactored and maintained responsive user interfaces using ReactJS, TailwindCSS, and Next.js, improving performance and user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="my-16 flex flex-col items-center  md:my-20"
    >
      <h2 className="mb-3 w-full text-center md:mb-6">Experience</h2>
      <div className="max-w-screen-sm mx-auto px-6">
        <div className="relative ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 border-l-2" />

          {experiences.map(
            ({ company, description, period, technologies, title }, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold">
                      {company}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{period}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
