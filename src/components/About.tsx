import { Code, Palette, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Écrire des solutions claires, maintenables et évolutives.",
    },
    {
      icon: Palette,
      title: "Conversion de Maquettes",
      description:
        "Transformer fidèlement des maquettes en sites web fonctionnels.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimiser les applications pour rapidité et fiabilité.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travailler efficacement avec équipes et clients.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span>About Me</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Développeur Web <span className="text-blue-400">Full Stack</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Je suis RAMAHEFASOLO Tojosoa Eric, développeur web passionné par
                la création de sites performants et fonctionnels. Mon expertise
                se concentre sur PHP et MySQL, avec pour objectif de devenir un
                développeur full-stack compétent.
              </p>

              <p>
                Même si je ne suis pas designer, je peux transformer une
                maquette en un site web fidèle à l’original, en respectant
                design, structure et fonctionnalités. Mon approche repose sur la
                précision, la qualité et la compréhension des besoins du client.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-3xl text-blue-400 mb-2">10+</div>
                <div className="text-muted-foreground">
                  Projets personnels réalisés
                </div>
              </div>
              <div>
                <div className="text-3xl text-blue-400 mb-2">3+</div>
                <div className="text-muted-foreground">Langages maîtrisés</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-blue-400" />
                </motion.div>

                <h3 className="text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
