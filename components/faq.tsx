import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Faq() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold gold-text mb-4">ماذا يقول عملائنا</h2>
          <div className="bg-amber-900/30 rounded-xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-800/50 rounded-lg p-1">
                  <div className="relative w-full h-20">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Testimonial"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold gold-text mb-6 text-center">الأسئلة الشائعة</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gold/30">
              <AccordionTrigger className="text-white hover:text-gold py-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-right text-base">1. ما هي الخدمات التي يقدمها ويز؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm">
                نقدم مجموعة متكاملة من خدمات التسويق الرقمي وتطوير المواقع والتطبيقات وإدارة وسائل التواصل الاجتماعي
                وتحسين محركات البحث.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gold/30">
              <AccordionTrigger className="text-white hover:text-gold py-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-right text-base">
                    2. هل يمكنكم تطوير موقع إلكتروني أو تطبيق مخصص حسب احتياجاتي؟
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm">
                نعم، نقدم خدمات تطوير مخصصة للمواقع والتطبيقات حسب متطلباتك الخاصة.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gold/30">
              <AccordionTrigger className="text-white hover:text-gold py-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-right text-base">3. ما هي المدة التي يستغرقها تطوير مشروع برمجي؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm">
                تعتمد المدة على حجم وتعقيد المشروع، ولكننا نلتزم بجداول زمنية واضحة نتفق عليها مسبقاً.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gold/30">
              <AccordionTrigger className="text-white hover:text-gold py-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-right text-base">4. هل تقدمون الدعم والصيانة بعد تسليم المشروع؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm">
                نعم، نقدم حلولاً مخصصة تناسب احتياجات عملك، بدءاً من التصميم وصولاً إلى التطوير والتنفيذ الكامل.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

