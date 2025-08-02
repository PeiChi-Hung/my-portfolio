export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        <article className="flex flex-col gap-4 text-pretty">
          <p>
            A junior software developer who enjoys turning ideas into clean,
            responsive web apps. I’ve worked on real-world projects in startups
            and edtech, where I got to build features, refactor messy
            components, and help make things easier to use and maintain.
          </p>
          <p>
            I’ve collaborated closely with lead devs to figure out user flows,
            debug tricky issues, and test out new ideas to see what works. I
            also enjoy using tools like GitHub Copilot and Cursor to speed
            things up and solve problems more efficiently. Along the way, I’ve
            helped with AWS deployment tasks and tracked work using Linear.
          </p>

          <p>
            Right now, I’m looking for my next opportunity — ideally with a
            supportive team where I can keep learning, write better code, and
            contribute to something meaningful. I mostly work with React,
            TypeScript, and Tailwind, and I’m always excited to pick up new
            tools along the way.
          </p>
          <p>Let’s build something cool together! </p>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <img
          src="/photo.jpg"
          alt="photo"
          className="w-[350px] min-w-[300px] rounded-xl transition-all hidden lg:block"
        />
        <img
          src="/photo.jpg"
          alt="photo"
          className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
        />
      </div>
    </section>
  );
}
