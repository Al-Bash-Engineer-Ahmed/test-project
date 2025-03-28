"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const salesData = [
  {
    title: "المبيعات",
    icon: "📈",
    metrics: [
      { label: "إجمالي المبيعات", value: "101,585.3 رس", percentage: "100%" },
      { label: "تكاليف المنتجات", value: "-45,480 رس", percentage: "100%" },
      { label: "كوبونات التخفيض", value: "-1,325.7 رس", percentage: "100%" },
      { label: "الشحن", value: "-25 رس", percentage: "100%" },
      { label: "الضرائب", value: "-", percentage: "-" },
      { label: "رسوم الدفع", value: "-578,14 رس", percentage: "100%" },
      { label: "صافي المبيعات", value: "55,504.16 رس", percentage: "100%" },
      { label: "الطلبات", value: "281 طلب", percentage: "100%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📊",
    metrics: [
      { label: "إجمالي المبيعات", value: "979,626.59 رس", percentage: "100%" },
      { label: "تكاليف المنتجات", value: "-213,337.5 رس", percentage: "100%" },
      { label: "كوبونات التخفيض", value: "-68,210.69 رس", percentage: "100%" },
      { label: "الشحن", value: "-44,426 رس", percentage: "100%" },
      { label: "الضرائب", value: "-", percentage: "-" },
      { label: "رسوم الدفع", value: "-12,409.38 رس", percentage: "100%" },
      { label: "صافي المبيعات", value: "727,453.71 رس", percentage: "100%" },
      { label: "الطلبات", value: "8,105 طلب", percentage: "100%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📉",
    metrics: [
      { label: "إجمالي المبيعات", value: "101,997 رس", percentage: "7.01%" },
      { label: "تكاليف المنتجات", value: "-22,807.5 رس", percentage: "9.25%" },
      { label: "كوبونات التخفيض", value: "-14,893 رس", percentage: "5.22%" },
      { label: "الشحن", value: "-6,288 رس", percentage: "2.99%" },
      { label: "الضرائب", value: "-", percentage: "-" },
      { label: "رسوم الدفع", value: "-1,474.27 رس", percentage: "6.03%" },
      { label: "صافي المبيعات", value: "71,427.23 رس", percentage: "6.85%" },
      { label: "الطلبات", value: "921 طلب", percentage: "3.96%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📈",
    metrics: [
      { label: "إجمالي المبيعات", value: "103,018.65 رس", percentage: "17.21%" },
      { label: "تكاليف المنتجات", value: "-16,384 رس", percentage: "25.18%" },
      { label: "كوبونات التخفيض", value: "-839,62 رس", percentage: "14.67%" },
      { label: "الشحن", value: "-", percentage: "-" },
      { label: "الضرائب", value: "-", percentage: "-" },
      { label: "رسوم الدفع", value: "-5,351.61 رس", percentage: "20.42%" },
      { label: "صافي المبيعات", value: "81,283.04 رس", percentage: "22.31%" },
      { label: "الطلبات", value: "4,330 طلب", percentage: "16.75%" },
    ],
  },
];



export default function Portfolio() {
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

        {/* Swiper for Sales Cards */}
        <Tabs defaultValue="sales" className="w-full">
          <TabsContent value="sales">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation={{ nextEl: ".next-sales", prevEl: ".prev-sales" }}
              modules={[Navigation]}
              className="rounded-lg overflow-hidden"
            >
              {salesData.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card className="bg-white border border-gray-900 rounded-xl shadow-lg p-4 relative">
                    <CardContent>
                      {/* Card Header */}
                      <div className="flex items-center justify-end gap-3 p-3 mb-4">
                        <span className="text-xl">{card.icon}</span>
                        <h2 className="text-2xl font-bold text-[#034D82]">
                          {card.title}
                        </h2>
                      </div>

                      {/* Sales Data Table */}
                      <div className="overflow-x-auto pb-[80px]">
                        <table className="w-full text-right text-gray-800 rtl">
                          <thead>
                            <tr className="border-b">
                              <th className="py-2 text-gray-500">النسبة</th>
                              <th className="py-2 text-gray-500">القيمة</th>
                              <th className="py-2 text-gray-500">التفاصيل</th>
                            </tr>
                          </thead>
                          <tbody>
                            {card.metrics.map((metric, i) => (
                              <tr key={i} className="border-b font-bold">
                                <td className="py-2 text-gray-500">
                                  {metric.percentage}
                                </td>
                                <td className="py-2 text-red-500">
                                  {metric.value}
                                </td>
                                <td className="py-2 font-semibold text-black">
                                  {metric.label}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="absolute bottom-0 w-full">
                        <img
                          className="absolute bottom-0 w-full"
                          src="/images/Vector 4.png"
                          alt="Vector"
                        />
                        <img
                          className="absolute bottom-0 w-full"
                          src="/images/Vector 3.png"
                          alt="Vector"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
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
    </section>
  );
}

