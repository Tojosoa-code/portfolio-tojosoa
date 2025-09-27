import {
  Calendar,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tojosoamahefa@gmail.com",
      href: "mailto:tojosoamahefa@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+261 34 49 018 94",
      href: "tel:+261344901894",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Antananarivo, Madagascar",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ton-profil",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ton-profil",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "#",
      color: "hover:text-indigo-400",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "facebook-hover",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "instagram-hover",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-emerald-950/10" />
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête */}
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
            <span>Contact</span>
            <div className="w-12 h-px bg-blue-400" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discutons de votre
            <span className="text-blue-400"> projet web</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Vous avez une idée ou un projet en tête ? Je serais ravi d'en
            discuter avec vous et de voir comment je peux vous aider.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <Card className="p-8 border-border/50 bg-secondary/20 backdrop-blur-sm">
              <motion.div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl">Envoyer un message</h3>
                  <p className="text-muted-foreground text-sm">
                    Je réponds sous 24h
                  </p>
                </div>
              </motion.div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Prénom
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Sujet</label>
                  <Input placeholder="Ex: Développement site web" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Parlez-moi de votre projet..."
                    rows={5}
                  />
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Infos de contact */}
          <motion.div className="space-y-8">
            <Card className="p-8 border-border/50 bg-secondary/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl">Mes coordonnées</h3>
                  <p className="text-muted-foreground text-sm">
                    Contact direct
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Réseaux sociaux */}
            <Card className="p-8 border-border/50 bg-secondary/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl">Retrouvez-moi</h3>
                  <p className="text-muted-foreground text-sm">
                    Suivez mon parcours
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Disponibilité */}
            <motion.div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20">
              <motion.div
                className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-3 animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-emerald-400 mb-1">Disponible</p>
              <p className="text-sm text-muted-foreground">
                Ouvert aux nouveaux projets et collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
