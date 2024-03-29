import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import Navbar from "./sections/Navbar.tsx"
import GridBackground from "./components/GridBackground.tsx"
import BackToTop from "./components/BackToTop.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <GridBackground />
    <main className="container overflow-x-hidden lg:px-28">
      <App />
    </main>
    <BackToTop />
  </React.StrictMode>
)
