"use client";

import { toast } from "sonner";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { Check, Star, Users, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/shared/assets/relax.jpeg";
import { submitFormspree } from "@/shared/lib/utils";

const benefits = [
  "Excursii organizate lunar în locații spectaculoase",
  "Comunitate activă și prietenoasă de motocicliști",
  "Workshopuri de mentenanță și siguranță rutieră",
  "Reduceri la magazinele partenere de echipamente",
  "Evenimente sociale și întâlniri regulate",
  "Suport tehnic și consiliere pentru începători",
  "Acces la trasee private și evenimente exclusive",
  "Asigurare de grup pentru excursiile organizate",
];

export default function ContactUsPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motorcycle: "",
    experience: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await submitFormspree(formData);

    toast("Îți vom răspunde în cel mult 24 de ore.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      motorcycle: "",
      experience: "",
      message: "",
    });
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <section
        className="from-background via-primary/5 to-background relative h-screen bg-linear-to-br bg-cover bg-right md:bg-center"
        style={{ backgroundImage: `url('${heroImage.src}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Alătură-te <span className="text-blue-300">Club Moto</span>
            </h1>
            <p className="text-xl text-white/90">
              Începe-ți aventura pe două roți alături de cea mai activă
              comunitate de motocicliști
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto mt-20 px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="moto-card h-fit">
              <h2 className="text-foreground mb-6 text-3xl font-bold">
                Beneficiile <span className="text-primary">Membrilor</span>
              </h2>

              <div className="mb-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="text-primary-foreground h-4 w-4" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="border-muted grid grid-cols-3 gap-4 border-t pt-6">
                <div className="text-center">
                  <div className="text-primary mb-1 text-2xl font-bold">
                    300
                  </div>
                  <div className="text-muted-foreground text-sm">Membri</div>
                </div>
                <div className="text-center">
                  <div className="text-primary mb-1 text-2xl font-bold">
                    50+
                  </div>
                  <div className="text-muted-foreground text-sm">Excursii</div>
                </div>
                <div className="text-center">
                  <div className="text-primary mb-1 text-2xl font-bold">10</div>
                  <div className="text-muted-foreground text-sm">Ani</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="moto-card">
              <h2 className="text-foreground mb-6 text-3xl font-bold">
                Formular de Înscriere
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-muted focus:ring-primary bg-background text-foreground w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="Numele și prenumele"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-muted focus:ring-primary bg-background text-foreground w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="adresa@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-muted focus:ring-primary bg-background text-foreground w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="+40 7xx xxx xxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="motorcycle"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Motocicletă *
                  </label>
                  <input
                    type="text"
                    id="motorcycle"
                    name="motorcycle"
                    required
                    value={formData.motorcycle}
                    onChange={handleChange}
                    className="border-muted focus:ring-primary bg-background text-foreground w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="Marca, model, anul (ex: Honda CBR 600RR 2020)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Experiență
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="!focus:ring-2 !border-muted !focus:ring-primary !bg-background !text-foreground !w-full !rounded-lg !border !px-4 !py-3 focus:border-transparent"
                  >
                    <option value="">Selectează nivelul de experiență</option>
                    <option value="incepator">Începător (0-1 an)</option>
                    <option value="intermediar">Intermediar (1-5 ani)</option>
                    <option value="avansat">Avansat (5+ ani)</option>
                    <option value="expert">Expert (10+ ani)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-muted focus:ring-primary bg-background text-foreground w-full resize-none rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="Spune-ne de ce vrei să te alături clubului nostru..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="moto-button group flex w-full items-center justify-center"
                >
                  Trimite cererea
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <p className="text-muted-foreground text-center text-sm">
                  Îți vom răspunde în cel mult 24 de ore cu următorii pași.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Gata să începi aventura?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Alătură-te comunității noastre și descoperă cele mai frumoase
              drumuri din țară!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-5 w-5" />
                <span>Comunitate activă</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-5 w-5" />
                <span>Evenimente regulate</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="h-5 w-5" />
                <span>Experiențe de neuitat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
