import ContactList from "@/components/ContactList"

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">Hi, I'm Patty Hung!</h1>
      <h1>An Aspiring Software Developer</h1>
      <h1>Welcome to my page!</h1>
      <ContactList />
    </section>
  )
}
