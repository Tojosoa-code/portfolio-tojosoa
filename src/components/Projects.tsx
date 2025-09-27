import { ArrowRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "CLI Todo App",
      description:
        "Application en Python pour gérer vos tâches depuis le terminal. Ajout, suppression et suivi des tâches de manière simple et efficace.",
      image:
        "https://images.unsplash.com/photo-1616491782244-1b6a540e82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tags: ["Python", "CLI", "Todo"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Modern Dashboard Analytics",
      description:
        "Dashboard simple pour visualiser des données avec React et TypeScript. Idéal pour apprendre la création de composants interactifs.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tags: ["React", "TypeScript", "Dashboard"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Système d'Authentification PHP",
      description:
        "Un système complet d'authentification en PHP avec inscription, connexion, gestion de sessions et sécurité des mots de passe. Utilisation de MySQL pour stocker les données utilisateur.",
      image:
        "https://images.unsplash.com/photo-1581091870624-8e1711bdbb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // tu peux changer l'image
      tags: ["PHP", "MySQL", "Sécurité", "Session"],
      featured: false,
      demoUrl: "#", // ajouter lien si tu as une démo
      githubUrl: "#", // ajouter lien vers GitHub
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-blue-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-blue-400" />
            <span>Projets</span>
            <div className="w-12 h-px bg-blue-400" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projets réalisés
            <span className="text-blue-400"> en développement</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Voici quelques projets sur lesquels j’ai travaillé, montrant mes
            compétences en programmation et la réalisation de projets
            fonctionnels.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
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
              {/* Project image */}
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

              {/* Project content */}
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
                  {project.tags.map((tag, tagIndex) => (
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

        {/* View all projects CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-blue-500/20 text-gray-400 hover:text-blue-400"
              onClick={() => navigate("/projets")}
            >
              Voir tous les projets
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
