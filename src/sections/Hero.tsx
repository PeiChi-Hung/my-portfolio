import { AvatarWaving } from "@/components/3d/AvatarWaving";
import ContactList from "@/components/ContactList";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero-mobile lg:hero relative flex lg:h-full lg:p-0">
      <div className="w-full">
        <AvatarWaving />
      </div>

      <div className="absolute inset-x-0 top-0 flex items-center justify-center">
        <div
          className="mx-auto flex flex-col items-center gap-4 border border-blue-500 text-center lg:items-start"
          // animate={{ x: 100, transition: { duration: 2 } }}
        >
          <h1 className="text-[1.4rem] md:text-[2rem]">Hi, I'm Patty Hung</h1>
          <h1 className="xl:w-3/4 2xl:w-full">
            An Aspiring Software Developer
          </h1>
          <ContactList />
        </div>
      </div>
    </section>
  );
}
