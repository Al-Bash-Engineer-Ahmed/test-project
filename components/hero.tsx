"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setShowVideo(true);
          }, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full pt-4 pb-8 bg-background text-center">
      <div className="container px-4 max-w-md mx-auto">
        {/* Discount Badge */}
        <div
          className="flex justify-between items-center mb-8"
          data-aos="fade-down"
        >
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8" data-aos="fade-up">
          <h1 className="text-3xl font-bold gold-text leading-tight">
            ويز - منصتك الذكية للخدمات!
          </h1>
          <p className="text-white text-lg font-medium leading-relaxed">
            اكتشف واطلب خدمات متنوعة بسهولة وسرعة، وكن دائمًا متقدمًا
          </p>
          <p className="text-white/80 text-base">
            وفر وقتك وجهدك مع ويز - كل ما تحتاجه من خدمات في مكان واحد!
          </p>
        </div>

        {/* CTA Button */}
        <Button
          className="bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6 px-8 h-auto rounded-full w-full mb-8"
          data-aos="zoom-in"
        >
          ابدأ الآن مجانًا
        </Button>

        {/* Video Section */}
        <div className="video-container mb-8" ref={videoRef} data-aos="fade-up">
          {showVideo ? (
            <video
              width="100%"
              height="235"
              autoPlay
              muted
              playsInline
              loop
              className="rounded-xl"
            >
              <source src="images/video-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="relative h-48 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <Image
                src="images/hero.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play size={48} className="text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
