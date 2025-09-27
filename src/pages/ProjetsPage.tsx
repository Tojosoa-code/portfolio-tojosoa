import { ArrowLeft, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectsGrid from "../components/ProjetctsGrid";
import { motion } from "motion/react";

export default function ProjetsPage() {
  const navigate = useNavigate();

  return (
    <div className="p-8 relative min-h-screen bg-gray-50">
      {/* Bouton retour */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </button>

      <div className="flex gap-3 items-center">
        <motion.div
          className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center"
          whileHover={{ rotate: 5 }}
        >
          <Code className="w-5 h-5 text-white" />
        </motion.div>
        <span className="text-xl">Tojosoa Mahefa</span>
      </div>

      {/* Affichage des projets */}
      <ProjectsGrid />
    </div>
  );
}
