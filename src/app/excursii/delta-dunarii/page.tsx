import { Calendar, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import nufar1 from "@/shared/assets/nufar/WhatsApp Image 2026-03-02 at 22.05.29.jpeg";
import nufar2 from "@/shared/assets/nufar/WhatsApp Image 2026-03-02 at 22.05.36.jpeg";
import nufar3 from "@/shared/assets/nufar/WhatsApp Image 2026-03-02 at 22.07.51.jpeg";
import nufar4 from "@/shared/assets/nufar/WhatsApp Image 2026-03-02 at 22.07.57.jpeg";

export const metadata = {
  title: "Pe urmele Nufărului Auriu – Delta Dunării | BDG Moto Club",
  description:
    "Excursie moto spre Delta Dunării. Există drumuri pe care mergi. Și există drumuri care te duc într-o stare.",
};

export default function DeltaDunariiPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <section className="from-muted/30 to-background bg-gradient-to-b py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Pe urmele Nufărului Auriu –{" "}
              <span className="text-primary">Delta Dunării</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Simbolul BDG. Există drumuri pe care mergi. Și există drumuri care
              te duc într-o stare.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="moto-card overflow-hidden">
              {/* Image Slider */}
              <div className="relative mb-6 h-[400px] overflow-hidden rounded-lg md:h-[500px]">
                <div className="grid h-full grid-cols-2 gap-2 md:grid-cols-4">
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nufar1}
                      alt="Delta Dunarii Adventure 1"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nufar2}
                      alt="Delta Dunarii Adventure 2"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nufar3}
                      alt="Delta Dunarii Adventure 3"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nufar4}
                      alt="Delta Dunarii Adventure 4"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-muted/30 flex flex-col gap-4 rounded-lg p-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
                  <div className="text-muted-foreground flex items-center justify-center text-lg font-semibold md:justify-start">
                    <Calendar className="text-primary mr-2 h-6 w-6" />
                    30 Aprilie 2026
                  </div>
                  <div className="text-muted-foreground flex items-center justify-center text-lg font-semibold md:justify-start">
                    <MapPin className="text-primary mr-2 h-6 w-6" />
                    Plecare din Suceava
                  </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-foreground">
                    Pe 30 aprilie 2026 plecăm din Suceava spre unul dintre cele
                    mai spectaculoase și sălbatice locuri din Europa – Delta
                    Dunării.
                  </p>
                  <p className="text-foreground">
                    Primăvara. Aer curat. Drumuri care șerpuiesc prin Moldova și
                    Dobrogea. Și la final… liniștea aceea incredibilă dintre ape
                    și cer.
                  </p>
                </div>

                {/* What Awaits */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    🌅 Ce înseamnă acest tur?
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    Este începutul sezonului moto așa cum trebuie. Nu
                    aglomerație. Nu caniculă. Nu grabă. Doar noi, motoarele, și
                    un traseu care îți aduce aminte de ce ai ales viața pe două
                    roți.
                  </p>

                  <h4 className="text-foreground mt-6 mb-3 text-xl font-semibold">
                    🌍 Traseu & experiență
                  </h4>
                  <ul className="text-muted-foreground grid space-y-3 gap-x-4 md:grid-cols-2">
                    <li className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Plecare din Suceava</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Drumuri spectaculoase prin estul României</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Opriri atent alese</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Intrare în Dobrogea pe asfalt curat și virajat
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Traversare către inima Deltei</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Cazare în locații autentice</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Apusuri peste ape infinite</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Plimbare opțională cu barca prin canale sălbatice
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Pește proaspăt, povești lungi, liniște totală</span>
                    </li>
                  </ul>
                  <p className="text-primary mt-4 text-xl font-bold italic">
                    Delta nu este despre viteză. Este despre stare.
                  </p>
                </div>

                {/* Why Join */}
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    🔥 De ce să vii?
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <Users className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Vrei să începi sezonul diferit.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Vrei să ieși din rutina zilnică.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Vrei kilometri cu sens, nu doar kilometri.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Vrei să fii parte dintr-un grup care trăiește
                        experiența, nu doar o bifează.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tour Level */}
                <div className="border-primary/20 rounded-lg border-2 p-6">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    🛣️ Nivelul turului
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tur accesibil, echilibrat, perfect pentru început de sezon.
                  </p>
                  <p className="text-foreground font-semibold">
                    Ritm plăcut. Kilometri calculați inteligent. Confort +
                    experiență autentică.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="from-primary/20 to-primary/10 rounded-lg bg-gradient-to-r p-8 text-center">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    Dacă ai spus vreodată „anul acesta fac ceva memorabil”, acum
                    este momentul.
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    📅 30 Aprilie 2026. Pornim împreună spre sud. Spre ape. Spre
                    libertate.
                  </p>
                  <p className="text-foreground mb-6 text-lg font-semibold">
                    📩 Locurile vor fi limitate.
                  </p>

                  <Link href="/inscriere">
                    <button className="moto-button px-8 py-4 text-lg">
                      Rezervă-ți locul
                    </button>
                  </Link>

                  <p className="text-primary mt-6 font-semibold">
                    📞 Sau contactează-ne direct: +40 753 850 578
                  </p>

                  <p className="text-primary mt-4 text-xl font-bold">
                    Ride with BDG. Relax. Reconnect. 🏁
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/excursii"
                    className="text-primary hover:underline"
                  >
                    &larr; Înapoi la toate excursiile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
