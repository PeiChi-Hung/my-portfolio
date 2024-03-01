interface projectType {
  project_title: string
  project_des: string
  languages: string[]
  link: string
}

export const project_data: projectType[] = [
  {
    project_title: "Automated Appointment Scheduling Script",
    project_des:
      "A Python script automates the tracking of visa medical appointments on the Bupa Medical Visa Services platform, addressing the challenge of securing an appointment within the required timeframe.",
    languages: ["python"],
    link: "https://github.com/PeiChi-Hung/booking-availability",
  },
  {
    project_title: "Booking System",
    project_des:
      "A system helps agents to place and manage bookings more efficiently.",
    languages: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    link: "https://github.com/PeiChi-Hung/booking-system",
  },
  {
    project_title: "Personal Cookbook",
    project_des: "A simple way to manage your favorite recipes.",
    languages: [
      "Vite.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Netlify",
      "mongoDB",
    ],
    link: "https://github.com/PeiChi-Hung/personal-cookbook",
  },
]
