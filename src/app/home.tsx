"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/shared/assets/hero-motorcycle.jpeg";

import Image from "next/image";
import clubLogo from "@/shared/assets/logo-w.png";

export default function HomePageContent() {
  return (
    <>
      <section
        className="hero-section relative flex min-h-screen w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="py-4"
          >
            <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full shadow-lg">
              <Image
                src={clubLogo.src}
                alt="Club Moto Logo"
                className="hero-logo"
                width={160}
                height={120}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto mb-8 max-w-2xl text-xl font-medium text-white/90 md:text-2xl"
            >
              Despre pasiunea pentru moto, timp liber si lifestyle. Promovam
              simplitatea si placerea comuna pentru moto, indiferent de varsta.
              Alatura-te si tu!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/inscriere" className="moto-button group">
                Înscrie-te acum
                <ArrowRight className="ml-2 inline h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/despre-noi"
                className="hover:text-foreground rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white"
              >
                Află mai multe
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              De ce să te alături <span className="text-primary">BDG MC?</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Descoperă aventurile pe două roți alături de o comunitate
              pasionată
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="moto-card group text-center"
            >
              <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                <MapPin className="text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-3 text-2xl font-bold">
                Excursii Organizate
              </h3>
              <p className="text-muted-foreground">
                Explorează cele mai frumoase trasee din țară și din Europa
                într-un cadru sigur și organizat
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="moto-card group text-center"
            >
              <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                <Users className="text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-3 text-2xl font-bold">
                Comunitate Activă
              </h3>
              <p className="text-muted-foreground">
                Întâlnește oameni cu aceeași pasiune și creează prietenii de
                durată în lumea moto
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="moto-card group text-center"
            >
              <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                <Calendar className="text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-3 text-2xl font-bold">
                Evenimente Regulate
              </h3>
              <p className="text-muted-foreground">
                Participă la întâlniri săptămânale, competiții și evenimente
                speciale pe tot parcursul anului
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/inscriere"
              className="moto-button inline-flex items-center"
            >
              Începe Aventura
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
