import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      message: "لقد استلمت طلبا جديدا برقم الطلب 12345# بقيمة 250 ريال.",
    },
    {
      id: 2,
      message: "لقد استلمت طلبا جديدا برقم الطلب 67890# بقيمة 300 ريال.",
    },
    { id: 3, message: "طلبك جاهز للشحن، سيتم تسليمه خلال 48 ساعة." },
    { id: 4, message: "تم استلام دفعة جديدة في حسابك بقيمة 500 ريال." },
  ];

  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-blue-900/30 border-0 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-white rounded-lg flex-shrink-0">
                  <img
                    src="/images/message.jpg"
                    className="h-10 w-10 rounded-lg"
                    alt="message"
                  />
                </div>
                <div className="text-right">
                  <p className="text-blue-400 text-sm mb-1">سلة</p>
                  <p className="text-white text-sm">{testimonial.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
