import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CiFolderOn } from "react-icons/ci"
import { VscGithubAlt } from "react-icons/vsc"

export default function Projects() {
  return (
    <section
      id="projects"
      className="my-4 mb-[50px] flex flex-col items-center gap-5 text-center md:mt-8"
    >
      <h2>Projects</h2>
      <a
        href="https://github.com/PeiChi-Hung/booking-availability"
        target="_blank"
      >
        <Card className="w-[350px] text-left">
          <div className="flex flex-row items-center justify-between pt-6 px-6">
            <CiFolderOn size={35} style={{ color: "#172554" }} />
            <VscGithubAlt size={20} style={{ color: "737373" }} />
          </div>

          <CardHeader>
            <CardTitle>Automated Appointment Scheduling Script</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A Python script automates the tracking of visa medical
              appointments on the Bupa Medical Visa Services platform,
              addressing the challenge of securing an appointment within the
              required timeframe.
            </p>
          </CardContent>
          <CardFooter className="font-mono text-xs">
            <p>Python</p>
          </CardFooter>
        </Card>
      </a>
    </section>
  )
}
