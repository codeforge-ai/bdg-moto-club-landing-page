"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

const experienceImages = [
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
].map((img) => `/experience/${img}`);

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function goToPrevious() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experienceImages.length - 1 : prevIndex - 1,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }

  function goToNext() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === experienceImages.length - 1 ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }

  function goToSlide(index: number) {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="group relative">
        <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-lg">
          {experienceImages.map((url, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
            >
              <Image
                src={url || "/placeholder.svg"}
                alt={`Experiență ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              variant="secondary"
              size="icon"
              onClick={goToPrevious}
              disabled={isAnimating}
              className="bg-background/80 hover:bg-background/90 h-12 w-12 rounded-full shadow-lg backdrop-blur-sm disabled:opacity-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={goToNext}
              disabled={isAnimating}
              className="bg-background/80 hover:bg-background/90 h-12 w-12 rounded-full shadow-lg backdrop-blur-sm disabled:opacity-50"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {experienceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? "bg-foreground h-2 w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2 w-2"
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

        <div className="text-muted-foreground mt-4 text-center text-sm">
          {currentIndex + 1} / {experienceImages.length}
        </div>
      </div>
    </div>
  );
}
