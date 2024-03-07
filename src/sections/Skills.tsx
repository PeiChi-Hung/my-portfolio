import { SkillCard } from "@/components/SkillCard"
import reactIcon from "@/assets/icons/react.png"
import nextjsIcon from "@/assets/icons/next-js.png"
import typescriptIcon from "@/assets/icons/typescript.png"
import javascriptIcon from "@/assets/icons/javascript.png"
import tailwindcssIcon from "@/assets/icons/tailwindcss.png"
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png"
import html5Icon from "@/assets/icons/html5.png"
import viteIcon from "@/assets/icons/vite.png"
import prettierIcon from "@/assets/icons/prettier.png"
import pythonIcon from "@/assets/icons/python.png"
import nodejsIcon from "@/assets/icons/nodejs.png"
import prismaIcon from "@/assets/icons/prisma.png"
import mongodbIcon from "@/assets/icons/mongodb.svg"
import postmanIcon from "@/assets/icons/postman.svg"
import gitIcon from "@/assets/icons/git.png"
import vscodeIcon from "@/assets/icons/vscode.png"
import tableauIcon from "@/assets/icons/tableau.png"
import rstudioIcon from "@/assets/icons/rstudio.png"
import powerBIIcon from "@/assets/icons/powerbi.png"

export default function Skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },
        {
          name: "Vite",
          icon: viteIcon,
        },
        {
          name: "Prettier",
          icon: prettierIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Prisma ORM",
          icon: prismaIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
      ],
    },
    {
      title: "Data Analysis & Visualisation",
      skills: [
        { name: "R", icon: rstudioIcon },
        {
          name: "PowerBI",
          icon: powerBIIcon,
        },
        {
          name: "Tableau",
          icon: tableauIcon,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: gitIcon },
        {
          name: "Postman",
          icon: postmanIcon,
        },
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
      ],
    },
  ]
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <h2 className="mb-4">My Skills</h2>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <div key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <div className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
