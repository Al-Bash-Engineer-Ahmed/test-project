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
      { label: "إجمالي المبيعات", value: "120,255 رس", percentage: "40.25%" },
      { label: "تكاليف المنتجات", value: "90,000 رس", percentage: "35.50%" },
      { label: "كوبونات التخفيض", value: "5,000 رس", percentage: "5.00%" },
      { label: "الشحن", value: "10,255 رس", percentage: "8.50%" },
      { label: "الضرائب", value: "8,500 رس", percentage: "7.10%" },
      { label: "رسوم الدفع", value: "6,500 رس", percentage: "5.40%" },
      { label: "صافي المبيعات", value: "100,000 رس", percentage: "38.20%" },
      { label: "الطلبات", value: "45,000 رس", percentage: "25.00%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📊",
    metrics: [
      { label: "إجمالي المبيعات", value: "95,600 رس", percentage: "30.10%" },
      { label: "تكاليف المنتجات", value: "75,000 رس", percentage: "28.30%" },
      { label: "كوبونات التخفيض", value: "3,200 رس", percentage: "3.40%" },
      { label: "الشحن", value: "8,900 رس", percentage: "7.50%" },
      { label: "الضرائب", value: "6,800 رس", percentage: "6.00%" },
      { label: "رسوم الدفع", value: "4,700 رس", percentage: "4.10%" },
      { label: "صافي المبيعات", value: "80,000 رس", percentage: "30.20%" },
      { label: "الطلبات", value: "38,500 رس", percentage: "22.50%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📉",
    metrics: [
      { label: "إجمالي المبيعات", value: "110,400 رس", percentage: "38.00%" },
      { label: "تكاليف المنتجات", value: "88,500 رس", percentage: "33.50%" },
      { label: "كوبونات التخفيض", value: "4,500 رس", percentage: "4.90%" },
      { label: "الشحن", value: "9,200 رس", percentage: "7.80%" },
      { label: "الضرائب", value: "7,100 رس", percentage: "6.50%" },
      { label: "رسوم الدفع", value: "5,200 رس", percentage: "4.80%" },
      { label: "صافي المبيعات", value: "90,500 رس", percentage: "35.00%" },
      { label: "الطلبات", value: "41,200 رس", percentage: "23.80%" },
    ],
  },
  {
    title: "المبيعات",
    icon: "📈",
    metrics: [
      { label: "إجمالي المبيعات", value: "130,700 رس", percentage: "42.80%" },
      { label: "تكاليف المنتجات", value: "105,600 رس", percentage: "37.20%" },
      { label: "كوبونات التخفيض", value: "6,300 رس", percentage: "5.80%" },
      { label: "الشحن", value: "11,400 رس", percentage: "9.00%" },
      { label: "الضرائب", value: "9,300 رس", percentage: "7.50%" },
      { label: "رسوم الدفع", value: "7,000 رس", percentage: "6.20%" },
      { label: "صافي المبيعات", value: "110,500 رس", percentage: "40.00%" },
      { label: "الطلبات", value: "48,700 رس", percentage: "26.50%" },
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
                              <tr key={i} className="border-b">
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
                        <img className="absolute bottom-0 w-full" src="/images/Vector 4.png" alt="Vector" />
                        <img className="absolute bottom-0 w-full" src="/images/Vector 3.png" alt="Vector" />
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

