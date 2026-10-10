"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousImage() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <>
      <div className="mt-6 w-full">
        <div className="relative flex min-h-[450px] w-full items-center justify-center px-12">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - bild ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="h-auto max-h-[650px] w-auto max-w-full rounded-lg object-contain"
          />
          <button
            onClick={previousImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-lg bg-gray-900 p-2 text-white hover:bg-gray-700"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg bg-gray-900 p-2 text-white hover:bg-gray-700"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <p className="mt-3 text-center text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </>
  );
}
