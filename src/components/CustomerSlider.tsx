
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Platzhalter-Logos (unsplash Fotos oder eigene Logos als SVG/PNG möglich)
const customerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/SVG_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
];

const CustomerSlider = () => (
  <div className="w-full max-w-xl mx-auto my-4">
    <Carousel opts={{ loop: true, align: "center" }}>
      <CarouselContent>
        {customerLogos.map((logo, idx) => (
          <CarouselItem key={idx} className="flex justify-center items-center p-2">
            <img src={logo} alt={`Kundenlogo ${idx + 1}`} className="h-14 object-contain grayscale opacity-80" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);

export default CustomerSlider;
