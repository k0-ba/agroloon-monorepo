"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ScrollingGalleryProps {
  images: {
    src: string;
    alt: string;
    note: string;
  }[];
  direction: "left" | "right";
  speed: number;
  notePosition: "top" | "bottom";
  className?: string;
}

export function ScrollingGallery({
  images,
  direction,
  speed,
  notePosition,
  className = "",
}: ScrollingGalleryProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Create three sets of images to ensure smooth looping
  const triplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    if (!innerRef.current || !outerRef.current) return;

    let animationId: number;
    let startTime: number | null = null;
    let previousTimestamp: number | null = null;

    // Calculate the total width of a single set of images
    const singleSetWidth = innerRef.current.scrollWidth / 3;

    // Set initial position
    if (direction === "right") {
      innerRef.current.style.transform = `translateX(-${singleSetWidth}px)`;
    }

    const step = (timestamp: number) => {
      if (!innerRef.current) return;

      if (!startTime) startTime = timestamp;
      if (!previousTimestamp) previousTimestamp = timestamp;

      const elapsed = timestamp - previousTimestamp;
      previousTimestamp = timestamp;

      // Calculate how much to move based on elapsed time and speed
      const pixelsPerSecond = speed * 50;
      const pixelsToMove = (pixelsPerSecond * elapsed) / 1000;

      // Get current position
      const currentTransform = innerRef.current.style.transform;
      const currentX = currentTransform
        ? Number.parseFloat(
            currentTransform.replace("translateX(", "").replace("px)", "")
          )
        : direction === "right"
          ? -singleSetWidth
          : 0;

      // Calculate new position
      let newX =
        direction === "left"
          ? currentX - pixelsToMove
          : currentX + pixelsToMove;

      // Check if we need to reset position for seamless looping
      if (direction === "left" && newX <= -singleSetWidth) {
        // If scrolling left and we've gone past one set, reset to start
        newX = newX + singleSetWidth;
      } else if (direction === "right" && newX >= 0) {
        // If scrolling right and we've gone past one set, reset to -singleSetWidth
        newX = newX - singleSetWidth;
      }

      // Apply the new position
      innerRef.current.style.transform = `translateX(${newX}px)`;

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [direction, speed, images.length]);

  return (
    <div
      ref={outerRef}
      className={`relative overflow-hidden w-screen ${className}`}
    >
      <div
        ref={innerRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {triplicatedImages.map((image, index) => (
          <div key={index} className="relative inline-block flex-shrink-0 mx-1">
            {notePosition === "top" && (
              <div className="text-[10px] text-white/50 text-center mb-1">
                {image.note}
              </div>
            )}
            <div className="relative h-[180px] w-[280px] md:h-[220px] md:w-[340px] overflow-hidden rounded-md">
              <Image
                src={image.src || "/placeholder.svg?height=220&width=340"}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            {notePosition === "bottom" && (
              <div className="text-[10px] text-white/50 text-center mt-1">
                {image.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
