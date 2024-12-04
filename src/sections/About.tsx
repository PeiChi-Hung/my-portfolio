import { AvatarSitting } from "@/components/AvatarSitting"

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-stretch lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        <article className="flex flex-col gap-4 text-pretty">
          <p>
            Hello! I'm Patty Hung, a fresh graduate of Bachelor of Commerce and
            Computer Science student, majoring in Business Analytics and Data
            Science. Throughout my academic journey, I have honed my abilities
            in a diverse range of technologies, including R, SQL, Python,
            GitHub, HTML/CSS, React, Tableau, and Power BI.
          </p>
          <p>
            As a part of my final year project, I was actively involved in a
            group project centred around electricity demand forecasting, which
            holds a pivotal place in my academic curriculum. This hands-on
            project has not only provided me with invaluable experience in
            cutting-edge technologies like Azure, Machine Learning, and
            full-stack web development, encompassing both frontend and backend
            skills using React and Next.js but also exposed me to the
            fundamentals of effective project management.
          </p>

          <p>
            As I approach the culmination of my studies, I am enthusiastic about
            starting a career as a software developer. My dedication to
            continuous learning and problem-solving fuels my enthusiasm for
            building innovative and user-centric applications. I am
            wholeheartedly committed to utilizing my skills in Business
            Analytics and Data Science to craft software solutions that not only
            meet industry standards but also make a positive impact on the
            company.
          </p>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <div className="w-full h-full">
          <AvatarSitting />
        </div>
      </div>
    </section>
  )
}
