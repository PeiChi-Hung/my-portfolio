import ContactList from "@/components/ContactList"

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <div className="p-3 md:p-4">
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="w-[150px] h-[150px] object-center object-cover rounded-full animate-bounce-low"
        />
      </div>

      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">Hi, I'm Patty Hung</h1>
      <h1>An Aspiring Software Developer</h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <h2>Welcome to my page!</h2>
      </div>
      <ContactList />
    </section>
  )
}
