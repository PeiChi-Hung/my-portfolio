import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Contact } from "@/types/contact"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-neutral-500 hover:bg-neutral-600",
    href: "mailto:pattyhung72@gmail.com",
    icon: <MdEmail size={86} />,
  },
  {
    name: "GitHub",
    className: "bg-neutral-500 hover:bg-neutral-600",
    href: "https://github.com/PeiChi-Hung",
    icon: <FaGithubSquare size={86} />,
  },
  {
    name: "LinkedIn",
    className: "bg-neutral-500 hover:bg-neutral-600",
    href: "https://www.linkedin.com/in/pch23/",
    icon: <FaLinkedin size={86} />,
  },
]

export default function ContactList() {
  return (
    <div className="flex gap-3 py-3">
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  {contact.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}
