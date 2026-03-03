import { Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import nordkapp1 from "@/shared/assets/nordkapp-1.png";
import nordkapp2 from "@/shared/assets/nordkapp-2.png";
import nordkapp3 from "@/shared/assets/nord-brand.jpeg";

export const metadata = {
  title: "North to the Edge – Nordkapp Ride | BDG Moto Club",
  description:
    "O incursiune multiculturală spectaculoasă prin 12 țări din Europa de Est, Centrală și de Nord - de la Carpați la Cercul Polar",
};

export default function NordkappRidePage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <section className="from-background to-muted/30 bg-gradient-to-b py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              North to the Edge –{" "}
              <span className="text-primary">Nordkapp Ride</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              O incursiune multiculturală spectaculoasă prin 12 țări din Europa
              de Est, Centrală și de Nord - de la Carpați la Cercul Polar
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="moto-card overflow-hidden">
              {/* Image Slider */}
              <div className="relative mb-6 h-[400px] overflow-hidden rounded-lg md:h-[500px]">
                <div className="grid h-full grid-cols-2 gap-2 md:grid-cols-4">
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nordkapp1}
                      alt="Nordkapp Adventure 1"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nordkapp2}
                      alt="Nordkapp Adventure 2"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src="/experience/5.jpeg"
                      alt="Nordkapp Adventure 3"
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={nordkapp3}
                      alt="Nordkapp Adventure 4"
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground text-lg italic">
                    Există ture moto… și există experiențe care îți schimbă
                    perspectiva pentru totdeauna.
                  </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-foreground">
                    Plecăm din Suceava într-o aventură epică spre cel mai nordic
                    punct accesibil al Europei – Nordkapp. Un drum legendar. Mii
                    de kilometri. Țări diferite. Peisaje dramatice. Drumuri care
                    par desenate special pentru motocicliști.
                  </p>

                  <p className="text-foreground font-semibold">
                    Aceasta nu este doar o destinație. Este o provocare
                    personală. Este linia aceea invizibilă unde asfaltul se
                    termină și începe povestea.
                  </p>
                </div>

                {/* What Awaits */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    🌍 Ce te așteaptă?
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        🇷🇴 Plecare din Suceava, direct spre inima Scandinaviei
                      </span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        🇭🇺 🇸🇰 🇨🇿 🇵🇱 🇱🇹 🇱🇻 🇪🇪 🇫🇮 🇳🇴 – o călătorie prin 12 țări
                        din Europa Centrală și de Nord
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Drumuri spectaculoase prin Finlanda și Norvegia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Fiorduri dramatice și șosele sculptate în stâncă
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Atlantic Ocean Road</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Lumina nordică de vară și apusuri care nu se mai termină
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Sosirea la celebrul glob de la Nordkapp – momentul pe
                        care nu îl vei uita niciodată
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Aproximativ 8,000 km pe 2 roți – în 14 zile</span>
                    </li>
                  </ul>
                </div>

                {/* Why Join */}
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    🔥 De ce să vii?
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <Users className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Vei merge alături de oameni care înțeleg ce înseamnă
                        pasiunea pentru motocicletă
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Vei simți libertatea absolută, kilometru după kilometru
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Vei ieși din rutină și vei intra într-o experiență care
                        rămâne cu tine toată viața
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Vei putea spune: &quot;Am ajuns la capătul Europei… pe
                        două roți.&quot;
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
                    Aceasta este o expediție dedicată riderilor care iubesc
                    distanțele lungi și aventura adevărată.
                  </p>
                  <p className="text-foreground font-semibold">
                    Planificare serioasă, ritm echilibrat, opriri atent alese,
                    cazări confortabile și experiență autentică de grup.
                  </p>
                  <p className="text-primary mt-4 text-xl font-bold">
                    Nu este o simplă vacanță. Este un statement.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="from-primary/20 to-primary/10 rounded-lg bg-gradient-to-r p-8 text-center">
                  <h3 className="text-foreground mb-4 text-2xl font-bold">
                    Dacă simți că anul acesta trebuie să faci ceva memorabil…
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Dacă vrei să îți împingi limitele… Dacă Nordkapp este pe
                    lista ta de visuri… Acum este momentul.
                  </p>
                  <p className="text-foreground mb-6 text-lg font-semibold">
                    📩 Locurile sunt limitate.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Alătură-te echipei și vino să scriem împreună povestea
                    drumului către capătul lumii.
                  </p>

                  <Link href="/inscriere">
                    <button className="moto-button px-8 py-4 text-lg">
                      Înscrie-te Acum
                    </button>
                  </Link>

                  <p className="text-primary mt-6 text-xl font-bold">
                    Ride with BDG. Ride north this year. Ride free. Ride to
                    Nordkapp. 🏁
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
