import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./custom.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjetsPage from "./pages/ProjetsPage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projets" element={<ProjetsPage />} />
    </Routes>
  </BrowserRouter>
);
