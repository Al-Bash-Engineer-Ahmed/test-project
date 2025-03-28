"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold gold-text mb-4">
            ماذا يقول عملائنا
          </h2>
          <div
            className="bg-gradient-to-b from-[#E58B05] to-[#08162E] rounded-xl p-4"
            data-aos="zoom-in"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="rounded-lg p-1 cursor-pointer"
                  onClick={() => setSelectedImage(`images/client${num}.jpeg`)}
                  data-aos="fade-up"
                  data-aos-delay={num * 100}
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={`images/client${num}.jpeg`}
                      alt={`Client ${num}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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

        {/* FAQs Section */}
        <div className="mt-12">
          <h2
            className="text-2xl font-bold gold-text mb-6 text-center"
            data-aos="fade-up"
          >
            الأسئلة الشائعة
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {[1, 2, 3, 4].map((num) => (
              <AccordionItem
                key={num}
                value={`item-${num}`}
                className="border-b border-gold/30"
                data-aos="fade-right"
                data-aos-delay={num * 150}
              >
                <AccordionTrigger className="text-white hover:text-gold py-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-gold" />
                    <span className="text-right text-base">
                      {num === 1 && "1. ما هي الخدمات التي يقدمها ويز؟"}
                      {num === 2 &&
                        "2. هل يمكنكم تطوير موقع إلكتروني أو تطبيق مخصص حسب احتياجاتي؟"}
                      {num === 3 &&
                        "3. ما هي المدة التي يستغرقها تطوير مشروع برمجي؟"}
                      {num === 4 &&
                        "4. هل تقدمون الدعم والصيانة بعد تسليم المشروع؟"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm">
                  {num === 1 &&
                    "نقدم مجموعة متكاملة من خدمات التسويق الرقمي وتطوير المواقع والتطبيقات وإدارة وسائل التواصل الاجتماعي وتحسين محركات البحث."}
                  {num === 2 &&
                    "نعم، نقدم خدمات تطوير مخصصة للمواقع والتطبيقات حسب متطلباتك الخاصة."}
                  {num === 3 &&
                    "تعتمد المدة على حجم وتعقيد المشروع، ولكننا نلتزم بجداول زمنية واضحة نتفق عليها مسبقاً."}
                  {num === 4 &&
                    "نعم، نقدم حلولاً مخصصة تناسب احتياجات عملك، بدءاً من التصميم وصولاً إلى التطوير والتنفيذ الكامل."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
