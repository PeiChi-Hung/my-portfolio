// import { AvatarSitting } from "@/components/3d/AvatarSitting"
import { AvatarWaving } from "@/components/3d/AvatarWaving"
import ContactList from "@/components/ContactList"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="hero h-full border border-red-300 flex lg:flex-row lg:items-stretch lg:p-0">
      {/* <motion.div
        className="w-1/2 flex flex-col justify-center gap-4"
        animate={{ x: 100, transition: { duration: 2 } }}
      >
        <h1 className="text-[1.4rem] md:text-[2rem]">Hi, I'm Patty Hung</h1>
        <h1>An Aspiring Software Developer</h1>
        <ContactList />
      </motion.div> */}
      <div className="w-full">
        <AvatarWaving />
      </div>
    </section>
  )
}
