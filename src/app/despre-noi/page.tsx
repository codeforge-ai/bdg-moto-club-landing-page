import { Metadata } from "next";
import AboutUsPageContent from "@/app/despre-noi/page-content";

export const metadata: Metadata = {
  title: "Despre Noi | BDG - Club Moto",
  description:
    "Află povestea Club Moto: comunitate, pasiune, siguranță și excelență. Descoperă cine suntem, valorile noastre și experiența pe două roți.",
  keywords:
    "club moto, motociclete România, excursii moto, evenimente moto, înscriere club moto, servicii moto, comunitate moto, locații club moto, detailing moto, service moto, piese moto, accesorii moto, club moto Suceava, club moto București, club moto premium, aventură moto, suport motocicliști, club moto activ, club moto România",
  authors: [{ name: "BDG Moto Club" }],
  robots: "index, follow",
  other: {
    "geo.region": "RO",
    "geo.placename": "România",
    "geo.position": "45.9432;24.9668",
    ICBM: "45.9432, 24.9668",
    subject:
      "Club Moto România, excursii moto, servicii moto, evenimente, înscriere membri, comunitate moto, service moto, detailing moto, piese moto, accesorii moto, suport motocicliști",
    rating: "General",
    city: "România",
    service:
      "Excursii moto, Evenimente moto, Înscriere membri, Service moto, Detailing moto, Piese și accesorii moto, Comunitate moto, Locații club moto, Suport motocicliști",
  },
  openGraph: {
    title: "BDG Moto Club - Aventură, Comunitate, Servicii Moto | România",
    description:
      "Club Moto dedicat pasionaților de motociclete din România. Excursii organizate, evenimente, înscriere membri, locații, servicii premium moto, comunitate activă și suport pentru motocicliști.",
    type: "website",
    locale: "ro_RO",
    siteName: "BDG Moto Club",
  },
};

export default async function AboutUsPage() {
  return <AboutUsPageContent />;
}
