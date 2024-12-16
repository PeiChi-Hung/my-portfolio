import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import BackToTop from "./components/BackToTop.tsx"
import GridBackground from "./components/GridBackground.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GridBackground />
    <App />
    <BackToTop />
  </React.StrictMode>
)
