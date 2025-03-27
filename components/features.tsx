import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="w-full pb-12 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "زيادة الأرباح ",
              text: "زيادة الأرباح حتى 20X بذكاء إعلاني",
            },
            { title: "استهداف دقيق", text: "استهداف دقيق = مبيعات مضمونة" },
            {
              title: "تحسين الحملات",
              text: "تحسين الحملات لتحقيق أعلى تحويلات",
            },
            { title: "إدارة احترافية", text: "إدارة احترافية بدون مجهود منك" },
          ].map((feature, index) => (
            <Card
              key={index}
              className="feature-card border-0 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-tight">
                  {feature.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
