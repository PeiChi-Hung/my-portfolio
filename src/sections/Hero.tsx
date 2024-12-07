// import { AvatarSitting } from "@/components/3d/AvatarSitting"
import { AvatarWaving } from "@/components/3d/AvatarWaving"
import ContactList from "@/components/ContactList"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section
      className="hero h-full 
     flex relative lg:p-0"
    >
      <div className="w-full">
        <AvatarWaving />
      </div>

      <motion.div
        className="absolute flex flex-col lg:top-1/4 gap-4"
        animate={{ x: 100, transition: { duration: 2 } }}
      >
        <h1 className="text-[1.4rem] md:text-[2rem]">Hi, I'm Patty Hung</h1>
        <h1 className="xl:w-3/4 2xl:w-full">An Aspiring Software Developer</h1>
        <ContactList />
      </motion.div>
    </section>
  )
}
