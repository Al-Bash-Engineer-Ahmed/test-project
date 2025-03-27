"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
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
              {["sales1.jpg", "sales2.jpg", "sales3.jpg","sales4.jpg"].map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`/images/${image}`}
                      alt={`Sales Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full"
                    />
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

          {/* Marketing Slider */}
          <TabsContent value="marketing">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: ".next-marketing",
                prevEl: ".prev-marketing",
              }}
              modules={[Navigation]}
              className="rounded-lg overflow-hidden"
            >
              {["marketing1.jpg", "marketing2.jpg", "marketing3.jpg"].map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`/images/${image}`}
                      alt={`Marketing Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <button className="prev-marketing bg-white rounded-full p-2">
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button className="next-marketing bg-white rounded-full p-2">
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </TabsContent>

          {/* Design Slider */}
          <TabsContent value="design">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: ".next-design",
                prevEl: ".prev-design",
              }}
              modules={[Navigation]}
              className="rounded-lg overflow-hidden"
            >
              {["design1.jpg", "design2.jpg", "design3.jpg"].map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`/images/${image}`}
                      alt={`Design Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <button className="prev-design bg-white rounded-full p-2">
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button className="next-design bg-white rounded-full p-2">
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
