import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Benefits() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold gold-text mb-6">
            لماذا تختار ويز؟ مميزات تحقق لك 20X أرباحك! 🚀
          </h2>
        </div>

        <div className="space-y-6 mb-8">
          <div
            className="flex items-start gap-3 text-right"
            data-aos="fade-right"
          >
            <Check className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium">
                زيادة الأرباح حتى 20X بذكاء إعلاني
              </p>
              <p className="text-white/70 text-sm">
                نحول إعلاناتك إلى استثمار مربح من خلال استراتيجيات مدروسة لتضاعف
                مبيعاتك.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-3 text-right"
            data-aos="fade-left"
          >
            <Check className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium">
                استهداف دقيق + مبيعات مضمونة
              </p>
              <p className="text-white/70 text-sm">
                نصل إلى العملاء المتحمسين للشراء، مما يعزز العائد على الاستثمار
                (ROI) بأعلى كفاءة.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-3 text-right"
            data-aos="fade-right"
          >
            <Check className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium">
                تحسين الحملات لتحقيق أعلى تحويلات
              </p>
              <p className="text-white/70 text-sm">
                نجري تحسينات مستمرة على الإعلانات لضمان نتائج ثابتة ونمو سريع.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-3 text-right"
            data-aos="fade-left"
          >
            <Check className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium">
                إدارة احترافية بدون مجهود منك
              </p>
              <p className="text-white/70 text-sm">
                نوفر لك الوقت والجهد بإدارة كاملة لحملاتك بينما تستمتع بمضاعفة
                أرباحك!
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8" data-aos="zoom-in">
          <div className="bg-background rounded-xl">
            <div className="flex justify-center">
              <Image
                src="images/million.png"
                alt="Sales Dashboard"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center" data-aos="flip-up">
          <Button className="bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6 px-8 h-auto rounded-full w-full">
            احجز استشارة الآن
          </Button>
        </div>
      </div>
    </section>
  );
}
