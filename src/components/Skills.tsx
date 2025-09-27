import { Code, Cpu, Database, GitBranch, Globe, Palette } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: Cpu,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: ["Node.js", "PHP", "Python", "REST API"],
    },
    {
      title: "Bases de données",
      icon: Database,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Design",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      skills: ["Figma", "Design Responsive"],
    },
    {
      title: "Gestion de version",
      icon: GitBranch,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Déploiement",
      icon: Globe,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      skills: ["Vercel", "Netlify"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
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
            <span>Mes compétences</span>
            <div className="w-12 h-px bg-blue-400" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Donner vie à vos projets
            <span className="text-blue-400"> grâce au code</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Je suis un développeur passionné en apprentissage actif —
            transformant des maquettes en sites web fonctionnels et améliorant
            mes compétences chaque jour.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * categoryIndex,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </motion.div>

                  <div>
                    <h3
                      className={`text-xl group-hover:${category.color} transition-colors duration-300`}
                    >
                      {category.title}
                    </h3>
                    <div
                      className={`w-8 h-px ${category.bgColor} mt-1 group-hover:w-12 transition-all duration-300`}
                    />
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-secondary/50 text-foreground hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-muted-foreground mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Toujours en apprentissage, toujours en création. Construisons
            quelque chose ensemble.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
