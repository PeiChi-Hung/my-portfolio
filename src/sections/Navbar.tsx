export default function Navbar() {
  return (
    <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="text-5xl drop-shadow-2xl font-[goldensignature]">
          Patty Hung
        </div>
        <div className="n flex gap-x-8 text-xs md:text-base">
          <span>About</span>
          <span>Skills</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  )
}
