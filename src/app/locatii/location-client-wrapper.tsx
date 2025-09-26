"use client";
import dynamic from "next/dynamic";

const LocationPageContent = dynamic(() => import("./location"), { ssr: false });

export default function LocationPageClientWrapper() {
  return <LocationPageContent />;
}
