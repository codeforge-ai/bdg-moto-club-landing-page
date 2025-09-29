"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";
import excursionRoute from "@/shared/assets/excursion-route.jpeg";
import heroImage from "@/shared/assets/hero-motorcycle.jpeg";
import { ExcursionsMap } from "@/shared/components/excursions-map";

// Sample route coordinates (Bucharest to Brașov)
export const routes = [
  // === NAȚIONAL ===
  {
    id: "sv-delta",
    title: "Traseu: Suceava → Delta Dunării",
    description:
      "Tur spectaculos din nordul Moldovei până în inima Deltei Dunării. ~450km, recomandat pentru un weekend prelungit.",
    route: [
      [47.6514, 26.2556], // Suceava
      [45.1716, 29.6526], // Sulina
    ],
  },
  {
    id: "sv-maramures",
    title: "Traseu: Suceava → Maramureș",
    description:
      "O incursiune culturală prin Maramureș, plină de tradiții și biserici de lemn. ~250km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [47.6573, 23.5681], // Baia Mare
    ],
  },
  {
    id: "sv-brasov",
    title: "Traseu: Suceava → Brașov",
    description:
      "Călătorie pitorească prin Carpați, perfectă pentru un weekend. ~300km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [45.6427, 25.5887], // Brașov
    ],
  },
  {
    id: "sv-sibiu",
    title: "Traseu: Suceava → Sibiu",
    description:
      "Un tur urban-cultural, cu drumuri spectaculoase prin Transilvania. ~350km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [45.793, 24.121], // Sibiu
    ],
  },
  {
    id: "sv-portile-de-fier",
    title: "Traseu: Suceava → Porțile de Fier",
    description:
      "Ruta legendară prin Cazanele Dunării. ~600km, recomandată pentru 2-3 zile.",
    route: [
      [47.6514, 26.2556], // Suceava
      [44.6623, 22.4103], // Porțile de Fier
    ],
  },
  {
    id: "sv-timisoara",
    title: "Traseu: Suceava → Timișoara",
    description:
      "Călătorie lungă prin vestul țării, perfectă pentru un road trip de 2-3 zile. ~550km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [45.7489, 21.2087], // Timișoara
    ],
  },
  {
    id: "romania-map-tour",
    title: "Map Tour: Conturul României",
    description:
      "Tur complet pe granița României – adevăratul test de anduranță. 2000+ km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [45.1716, 29.6526], // Delta
      [44.6623, 22.4103], // Porțile de Fier
      [45.7489, 21.2087], // Timișoara
      [47.6573, 23.5681], // Maramureș
      [47.6514, 26.2556], // back to Suceava
    ],
  },

  // === INTERNAȚIONAL ===
  {
    id: "sv-budapesta",
    title: "Traseu: Suceava → Budapesta",
    description: "City break european pe motocicletă. ~700km.",
    route: [
      [47.6514, 26.2556], // Suceava
      [47.4979, 19.0402], // Budapesta
    ],
  },
  {
    id: "sv-cehia",
    title: "Traseu: Suceava → Cehia",
    description: "Drum prin Carpați și Slovacia până în inima Cehiei. ~900km.",
    route: [
      [47.6514, 26.2556],
      [50.0755, 14.4378], // Praga
    ],
  },
  {
    id: "sv-polonia",
    title: "Traseu: Suceava → Polonia",
    description: "Ruta nordică prin Ucraina/Slovacia către Cracovia. ~500km.",
    route: [
      [47.6514, 26.2556],
      [50.0647, 19.945], // Cracovia
    ],
  },
  {
    id: "long-tour-5000",
    title: "Tur 5000km+ Balcani",
    description:
      "Suceava → Ungaria → Slovenia → Croația → Muntenegru → Albania → Grecia → Bulgaria → Suceava. Aventura supremă, peste 5000km!",
    route: [
      [47.6514, 26.2556], // Suceava
      [47.4979, 19.0402], // Ungaria
      [46.0569, 14.5058], // Slovenia
      [45.815, 15.9819], // Croația
      [42.441, 19.2627], // Muntenegru
      [41.3275, 19.8189], // Albania
      [37.9838, 23.7275], // Grecia
      [42.7339, 25.4858], // Bulgaria
      [47.6514, 26.2556], // back Suceava
    ],
  },

  // === 2026 ===
  {
    id: "sv-elvetia",
    title: "Traseu: Suceava → Elveția",
    description: "Drumuri alpine celebre, precum Furka și Grimsel. ~1500km.",
    route: [
      [47.6514, 26.2556],
      [46.8182, 8.2275], // Elveția
    ],
  },
  {
    id: "sv-suedia",
    title: "Traseu: Suceava → Suedia",
    description: "Călătorie lungă spre nord, peste 2000km.",
    route: [
      [47.6514, 26.2556],
      [59.3293, 18.0686], // Stockholm
    ],
  },
  {
    id: "sv-norvegia",
    title: "Traseu: Suceava → Norvegia",
    description: "Fjorduri spectaculoase și drumuri unice. ~2500km.",
    route: [
      [47.6514, 26.2556],
      [60.472, 8.4689], // Norvegia
    ],
  },
  {
    id: "sv-finlanda",
    title: "Traseu: Suceava → Finlanda",
    description: "Tur nordic prin Finlanda. ~2800km.",
    route: [
      [47.6514, 26.2556],
      [61.9241, 25.7482], // Finlanda
    ],
  },
  {
    id: "sv-north-cape",
    title: "Traseu: Suceava → North Cape",
    description:
      "Expediția supremă: până la Cercul Polar, în Norvegia. 4000km+.",
    route: [
      [47.6514, 26.2556],
      [71.1719, 25.7836], // North Cape
    ],
  },
  {
    id: "sv-germania",
    title: "Traseu: Suceava → Germania",
    description: "Autobahn și drumuri alpine. ~1500km.",
    route: [
      [47.6514, 26.2556],
      [52.52, 13.405], // Berlin
    ],
  },
  {
    id: "sv-slovenia",
    title: "Traseu: Suceava → Slovenia",
    description: "Mic tur european spre Alpii sloveni. ~1000km.",
    route: [
      [47.6514, 26.2556],
      [46.0569, 14.5058], // Ljubljana
    ],
  },
  {
    id: "sv-maroc",
    title: "Traseu: Suceava → Maroc",
    description:
      "Expediție africană prin Spania și Gibraltar până în Maroc. 3500km+.",
    route: [
      [47.6514, 26.2556],
      [31.7917, -7.0926], // Maroc
    ],
  },
  {
    id: "sv-franta",
    title: "Traseu: Suceava → Franța",
    description: "Drumuri de coastă și Alpii francezi. ~2000km.",
    route: [
      [47.6514, 26.2556],
      [48.8566, 2.3522], // Paris
    ],
  },
  {
    id: "sv-spania",
    title: "Traseu: Suceava → Spania",
    description: "Drum lung prin Europa de Vest până în Spania. ~3000km.",
    route: [
      [47.6514, 26.2556],
      [40.4168, -3.7038], // Madrid
    ],
  },
];

const upcomingTrips = [
  {
    title: "Transfăgărășan Adventure",
    date: "15 Octombrie 2024",
    duration: "3 zile",
    difficulty: "Mediu",
    participants: "12/15",
    image: excursionRoute,
    description:
      "Explorează cel mai frumos drum din România prin Munții Carpați",
  },
  {
    title: "Transalpina Experience",
    date: "22 Octombrie 2024",
    duration: "2 zile",
    difficulty: "Avansat",
    participants: "8/12",
    image: excursionRoute,
    description: "Drumul Regilor te așteaptă cu peisaje spectaculoase",
  },
  {
    title: "Dunărea de Jos Tour",
    date: "5 Noiembrie 2024",
    duration: "1 zi",
    difficulty: "Ușor",
    participants: "18/20",
    image: excursionRoute,
    description: "Relaxant tur către Delta Dunării și Marea Neagră",
  },
];

export default function ExcursionsPageContent() {
  return (
    <>
      <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={heroImage.src}
        bgImageAlt="Excursii Club Moto"
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
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Excursii & Ieșiri
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              Descoperă cele mai frumoase drumuri din România și Europa
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Upcoming Trips */}
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
              Excursii <span className="text-primary">Planificate</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Alătură-te aventurilor noastre viitoare
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moto-card group overflow-hidden"
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                  {/*<img*/}
                  {/*  src={trip.image}*/}
                  {/*  alt={trip.title}*/}
                  {/*  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"*/}
                  {/*/>*/}
                  <div className="bg-primary text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-medium">
                    {trip.difficulty}
                  </div>
                </div>

                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {trip.description}
                </p>

                <div className="mb-6 space-y-2">
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Calendar className="text-primary mr-2 h-4 w-4" />
                    {trip.date}
                  </div>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Clock className="text-primary mr-2 h-4 w-4" />
                    {trip.duration}
                  </div>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Users className="text-primary mr-2 h-4 w-4" />
                    {trip.participants}
                  </div>
                </div>

                <button className="moto-button w-full">Înscrie-te</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Experiențe <span className="text-primary">Memorabile</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Vezi un rezumat din aventurile noastre recente
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="moto-card overflow-hidden p-0">
              <div className="bg-muted flex aspect-video items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                    <svg
                      className="text-primary-foreground ml-1 h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Video cu ultimele noastre aventuri - în curând disponibil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Harta <span className="text-primary">Traseelor</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Explorează rutele pe care le-am parcurs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {routes.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="moto-card overflow-hidden p-0"
              >
                <ExcursionsMap route={r.route as []} />
                <div className="bg-muted/50 p-6">
                  <h3 className="text-foreground mb-2 text-lg font-bold">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {r.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {[
              {
                number: "50+",
                label: "Excursii Organizate",
                icon: <MapPin className="h-8 w-8" />,
              },
              {
                number: "25K+",
                label: "Kilometri Parcurși",
                icon: <Star className="h-8 w-8" />,
              },
              {
                number: "150+",
                label: "Participări",
                icon: <Users className="h-8 w-8" />,
              },
              {
                number: "8",
                label: "Țări Vizitate",
                icon: <Calendar className="h-8 w-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  {stat.icon}
                </div>
                <div className="mb-2 text-3xl font-bold md:text-4xl">
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
