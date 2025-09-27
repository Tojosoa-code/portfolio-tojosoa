import {
  Code,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const anneeCourante = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Éléments de fond */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contenu principal du footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Section marque */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl">Tojosoa Mahefa</h3>
                  <p className="text-muted-foreground text-sm">
                    Développeur Web Full stack
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Je crée des expériences web interactives et modernes. Passionné
                par l'apprentissage constant et l'innovation dans le
                développement web.
              </motion.p>

              {/* Liens sociaux */}
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg mb-6 relative">
                Liens rapides
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg mb-6 relative">
                Contact
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h4>
              <div className="space-y-4">
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2">tojosoamahefa@gmail.com</div>
                  <div className="mb-2">+261 34 49 018 94</div>
                  <div>Antananarivo, Madagascar</div>
                </motion.div>

                <motion.div
                  className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Disponible pour des projets
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Barre du bas */}
        <motion.div
          className="py-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span>© {anneeCourante} Tojosoa Mahefa.</span>
              <span className="flex items-center gap-1">
                Fait avec{" "}
                <Heart className="w-4 h-4 text-red-500 fill-current" /> et
                passion
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Confidentialité
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Conditions
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Plan du site
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ligne décorative */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
    </footer>
  );
}
