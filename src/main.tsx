import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import BackToTop from "./components/BackToTop.tsx"
import GridBackground from "./components/GridBackground.tsx"
import "./index.css"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <GridBackground />
    <Hero />
    <main className="container overflow-x-hidden lg:px-10">
      <App />
    </main>
    <BackToTop />
  </React.StrictMode>
)
