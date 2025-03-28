"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-xl font-bold text-white mb-2">
            نبذة عن بعض أعمالنا
          </h2>
          <p className="text-white/70 text-sm">
            استكشف بعضًا من أعمالنا المتميزة التي تعكس احترافيتنا وجودة خدماتنا
            البرمجية.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="sales" className="w-full">
          {/* Sales Slider */}
          <TabsContent value="sales">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: ".next-sales",
                prevEl: ".prev-sales",
              }}
              modules={[Navigation]}
              className="rounded-lg overflow-hidden"
            >
              {["sales1.png", "sales2.png", "sales3.png", "sales4.jpg"].map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedImage(`/images/${image}`)}
                    >
                      <Image
                        src={`/images/${image}`}
                        alt={`Sales Image ${index + 1}`}
                        width={500}
                        height={400}
                        className="rounded-lg object-cover w-full h-[400px]"
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <button className="prev-sales bg-white rounded-full p-2">
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button className="next-sales bg-white rounded-full p-2">
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fullscreen Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
          data-aos="fade-in"
        >
          <div className="relative w-auto max-w-lg">
            <button
              className="absolute top-2 left-2 text-white bg-gray-700 p-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={600}
              height={600}
              className="rounded-lg object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
