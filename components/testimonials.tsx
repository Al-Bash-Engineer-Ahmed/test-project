import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      message: "لقد استلمت طلبا جديدا برقم الطلب 12345# بقيمة 250 ريال.",
    },
    {
      id: 2,
      message: "لقد استلمت طلبا جديدا برقم الطلب 12345# بقيمة 250 ريال.",
    },
    {
      id: 3,
      message: "لقد استلمت طلبا جديدا برقم الطلب 12345# بقيمة 250 ريال.",
    },
    {
      id: 4,
      message: "لقد استلمت طلبا جديدا برقم الطلب 12345# بقيمة 250 ريال.",
    },
  ]

  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-blue-900/30 border-0 rounded-xl overflow-hidden">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="bg-white rounded-lg p-2 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
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
  )
}

