"use client";
import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dr Victoria Chan",
      description:
        "Dr Victoria is a leading expert in the field of hover technology. Based in Silicon Valley, she has spent over a decade researching and developing innovative solutions that leverage the power of CSS perspective to create immersive user experiences. ",
      imageUrl:
        "https://oakharborwebdesigns.com/assets/images/port1-52b7e91d6e83606a7badc413e5423430.avif",
      tryLink: "https://twitter.com/mannupaaji",
    },
    {
      title: "Make things float in air",
      description:
        "Hover over this card to unleash the power of CSS perspective",
      imageUrl:
        "https://oakharborwebdesigns.com/assets/images/port1-52b7e91d6e83606a7badc413e5423430.avif",
      tryLink: "https://twitter.com/mannupaaji",
    },
    {
      title: "Make things float in air",
      description:
        "Hover over this card to unleash the power of CSS perspective",
      imageUrl:
        "https://oakharborwebdesigns.com/assets/images/port1-52b7e91d6e83606a7badc413e5423430.avif",
      tryLink: "https://twitter.com/mannupaaji",
    },
  ];

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 items-start md:items-center">
        <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
          portfolio
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:text-center">
          Our Projects
          <br />
          <span className="opacity-80 md:text-center">
            and what we have delivered
          </span>
        </h2>
        <p className="mt-4">
          We have worked with small businesses to large enterprises, delivering
          innovative solutions tailored to their needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imageUrl}
            link={project.tryLink}
          />
        ))}
      </div>
    </section>
  );
}
