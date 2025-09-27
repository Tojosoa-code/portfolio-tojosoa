import { ArrowRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { projects } from "../data/projects.js";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProjectsGrid() {
  useEffect(() => {
    // Ajoute la classe dark à html
    document.documentElement.classList.add("dark");

    // Smooth scrolling pour la page entière
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto space-y-16">
        {/* Titre section */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tous mes <span className="text-blue-400">Projets</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Une sélection de projets que j’ai réalisés pour apprendre,
            expérimenter et développer mes compétences en développement web.
          </motion.p>
        </div>

        {/* Liste projets */}
        <div className="space-y-16 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center mt-16 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-5%" }}
            >
              {/* Image projet */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="relative bg-secondary/20 rounded-2xl overflow-hidden border border-border/50 group-hover:border-blue-500/30 transition-all duration-500">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-container transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Contenu projet */}
              <motion.div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl text-blue-400">0{project.id}</div>
                  <div className="w-12 h-px bg-blue-400" />
                </div>

                <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white border-0"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    Voir le projet
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code source
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
