import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles/global.scss"
import "./App.css"
import GlobalProvider from "./store/globalContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Suspense>
  </React.StrictMode>,
)
