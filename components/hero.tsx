"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="w-full pt-4 pb-8 bg-background text-center">
      <div className="container px-4 max-w-md mx-auto">
        {/* Discount Badge */}
        <div className="flex justify-between items-center mb-8">
          <div className="discount-badge text-white text-sm">خصم 15% عند استخدام كود 5852318</div>
          <Button
            variant="secondary"
            className="bg-gray-500/20 hover:bg-gray-500/30 text-white text-sm py-1 px-4 h-auto rounded-md"
          >
            ابدأ الآن
          </Button>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-bold gold-text leading-tight">ويز - منصتك الذكية للخدمات!</h1>
          <p className="text-white text-lg font-medium leading-relaxed">
            اكتشف واطلب خدمات متنوعة بسهولة وسرعة، وكن دائمًا متقدمًا
          </p>
          <p className="text-white/80 text-base">وفر وقتك وجهدك مع ويز - كل ما تحتاجه من خدمات في مكان واحد!</p>
        </div>

        {/* CTA Button */}
        <Button className="bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6 px-8 h-auto rounded-full w-full mb-8">
          ابدأ الآن مجانًا
        </Button>

        {/* Video Section */}
        <div className="video-container mb-8">
          {showVideo ? (
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Wiz Services"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          ) : (
            <div className="relative h-48 rounded-xl overflow-hidden cursor-pointer" onClick={() => setShowVideo(true)}>
              <Image src="/images/video-thumbnail.png" alt="Video Thumbnail" fill className="object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-2">التصفح سهل.</h3>
                <div className="play-button">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

