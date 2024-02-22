import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import Navbar from "./sections/Navbar.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <main className="container overflow-x-hidden lg:px-28">
      <App />
    </main>
  </React.StrictMode>
)
