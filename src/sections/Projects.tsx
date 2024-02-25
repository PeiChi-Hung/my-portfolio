import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CiFolderOn } from "react-icons/ci"
import { VscGithubAlt } from "react-icons/vsc"
import { project_data } from "@/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="my-4 mb-[50px] flex flex-col items-center gap-5 text-center md:mt-8"
    >
      <h2>Projects</h2>
      <div className="flex flex-wrap justify-evenly gap-3 md:gap-5 md:px-6 lg:justify-center">
        {project_data.map((project) => (
          <a
            href={project.link}
            target="_blank"
            className="group shadow-none transition-all duration-200 ease-linear hover:scale-100 hover:drop-shadow-xl"
          >
            <Card className="w-[350px] h-[350px] text-left relative">
              <div className="flex flex-row items-center justify-between pt-6 px-6">
                <CiFolderOn size={35} style={{ color: "#172554" }} />
                <VscGithubAlt size={20} style={{ color: "737373" }} />
              </div>

              <CardHeader>
                <CardTitle>{project.project_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.project_des}</p>
              </CardContent>
              <CardFooter className="font-mono text-xs absolute bottom-1">
                <p className="flex space-x-3">
                  {project.languages.map((language) => (
                    <ul>{language}</ul>
                  ))}
                </p>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
