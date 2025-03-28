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
        {/* Logo & Booking Button */}
        <div className="flex items-center justify-between p-4 rounded-2xl mb-6 bg-transparent">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={50}
            className="rounded-lg"
          />
          <a
            href="https://api.whatsapp.com/send/?phone=966566599744"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6 px-6 rounded-lg">
              احجز استشارتك الآن
            </Button>
          </a>
        </div>

        {/* Main Heading with Animated Border */}
        <div className="space-y-4 mb-8" data-aos="fade-up">
          <h1 className="border-animate text-3xl font-bold leading-tight">
            مع ويز.. أنت الربحان!
          </h1>
          <p className="text-white text-md font-normal leading-relaxed">
            هل تريد تحقيق أقصى استفادة من ميزانيتك الإعلانية؟ ويز تقدم لك حلولًا
            احترافية في الميديا باينج وإدارة الحسابات، مما يضمن لك وصولًا دقيقًا
            لجمهورك المستهدف وزيادة مبيعاتك بذكاء!
          </p>
          <p className="text-white/80 text-sm">
            وفر وقتك وجهدك مع ويز - كل ما تحتاجه من خدمات في مكان واحد!
          </p>
        </div>

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

      {/* Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Raleway:400");

        .border-animate {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
          background: transparent;
        }

        .border-animate::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 12px;
          background: linear-gradient(
            45deg,
            #ffffff,
            #f59e0b,
            #ffffff,
            #f59e0b
          );
          background-size: 200% 200%;
          animation: gradientMove 3s linear infinite;
          z-index: -1;
          mask: linear-gradient(white 0 0) content-box,
            linear-gradient(white 0 0);
          -webkit-mask: linear-gradient(white 0 0) content-box,
            linear-gradient(white 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          padding: 2px;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
