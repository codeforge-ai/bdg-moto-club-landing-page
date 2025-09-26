"use client";
import dynamic from "next/dynamic";

const ExcursionsPageContent = dynamic(() => import("./excursions"), {
  ssr: false,
});

export default function ExcursionsPageClientWrapper() {
  return <ExcursionsPageContent />;
}
