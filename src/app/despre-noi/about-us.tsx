"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Users, Award, Heart, Bike } from "lucide-react";
import clubMembers from "@/shared/assets/club-members.jpeg";
import heroImage from "@/shared/assets/hero-motorcycle.jpeg";
import Image from "next/image";

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Comunitate",
    description:
      "Construim relații autentice bazate pe pasiunea comună pentru motociclete",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excelență",
    description:
      "Ne străduim să oferim cele mai bune experiențe și servicii membrilor noștri",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Pasiune",
    description: "Trăim și respirăm motociclismul în toate formele sale",
  },
  {
    icon: <Bike className="h-8 w-8" />,
    title: "Siguranță",
    description:
      "Promovăm conduita defensivă și responsabilă pe toate drumurile",
  },
];

export default function AboutUsPageContent() {
  return (
    <>
      <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={heroImage.src}
        bgImageAlt="Despre Club Moto"
        strength={-150}
        className="relative flex h-[70vh] items-center justify-center"
      >
        <div className="parallax-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-6 text-5xl font-bold text-lime-50 md:text-7xl">
              Despre Noi
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              Povestea unei comunități unite de pasiunea pentru motociclete
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Story Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
                Cine Suntem
              </h2>
              <div className="text-muted-foreground space-y-6 text-lg">
                <p>
                  Club Moto a fost înființat în 2015 de un grup de pasionați
                  care și-au dorit să exploreze frumusețile țării pe două roți.
                  Ce a început ca o mică grupare de prieteni s-a transformat
                  într-una dintre cele mai active comunități moto din regiune.
                </p>
                <p>
                  Astăzi, numărăm peste 150 de membri activi, de la începători
                  până la motocicliști experimentați, toți uniți de aceeași
                  pasiune pentru aventură și libertatea pe care o oferă
                  motocicleta.
                </p>
                <p>
                  Organizăm excursii regulate, evenimente de socializare și
                  susținem educația rutieră responsabilă în comunitatea
                  motocicliștilor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={clubMembers.src}
                  alt="Membrii Club Moto"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  width={800}
                  height={600}
                  priority
                />
              </div>
              <div className="bg-primary text-primary-foreground absolute -right-6 -bottom-6 rounded-xl px-6 py-4 shadow-lg">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm">Membri Activi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Valorile <span className="text-primary">Noastre</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Principiile care ne ghidează în fiecare aventură
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moto-card group text-center"
              >
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {[
              { number: "150+", label: "Membri Activi" },
              { number: "50+", label: "Excursii Organizate" },
              { number: "8", label: "Ani de Experiență" },
              { number: "25K+", label: "Kilometri Parcurși" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 text-4xl font-bold md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
