export default function Navbar() {
  const links = ["about", "experience", "skills", "projects", "contact"];
  return (
    <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="text-5xl drop-shadow-2xl font-[goldensignature]">
          Patty Hung
        </div>
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <span
              key={link}
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById(link)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
