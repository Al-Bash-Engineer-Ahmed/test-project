import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="w-full pb-12 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { title: "20X", text: "حقق نتائج أسرع بـ20 مرة من خلال الإعلانات" },
            { title: "+80 ساعة", text: "وفر أكثر من 80 ساعة من العمل اليدوي" },
            { title: "20X", text: "حقق نتائج أسرع بـ20 مرة من خلال الإعلانات" },
            {
              title: "+500 دولار",
              text: "وفر أكثر من 500 دولار على تكاليف كتابة المحتوى",
            },
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
