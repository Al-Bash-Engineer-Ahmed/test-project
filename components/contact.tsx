import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Bell, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            نرى هدفك وطريقة الوصول اليه
          </h2>
          <p className="text-gold text-xl font-extrabold">
            خلنا علي يمينك ونخليك أسعد صاحب مشروع
          </p>
        </div>

        {/* Contact Box */}
        <div
          className="bg-blue-900/50 rounded-xl p-5 border border-blue-800"
          data-aos="zoom-in"
        >
          {/* Social + Title + Extra Icon */}
          <div
            className="flex justify-between items-center mb-6"
            data-aos="fade-down"
          >
            <div className="flex gap-3">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Facebook className="h-6 w-6 text-blue-600 font-extrabold" />
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Instagram className="h-6 w-6 text-pink-600 font-extrabold" />
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-white">الاسم</h3>
            <div className="bg-white rounded-full p-2 shadow-md">
              <MessageSquare className="h-6 w-6 text-blue-500 font-extrabold" />
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" data-aos="fade-up">
            <div className="space-y-2" data-aos="fade-left">
              <label htmlFor="name" className="sr-only">
                الاسم
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="الاسم"
                className="bg-white text-right h-12 text-lg font-bold"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-2" data-aos="fade-right">
              <label htmlFor="service" className="sr-only">
                نوع الخدمة
              </label>
              <Input
                id="service"
                name="service"
                type="text"
                placeholder="نوع الخدمة"
                className="bg-white text-right h-12 text-lg font-bold"
                autoComplete="off"
                required
              />
            </div>
            <div className="space-y-2" data-aos="fade-left">
              <label htmlFor="phone" className="sr-only">
                رقم الجوال
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="رقم الجوال"
                className="bg-white text-right h-12 text-lg font-bold"
                autoComplete="tel"
                required
              />
            </div>
            <div className="space-y-2" data-aos="fade-right">
              <label htmlFor="email" className="sr-only">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 bg-white text-right h-10"
                autoComplete="email"
                data-aos="fade-right"
                data-aos-delay="500"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-gold hover:bg-gold/90 text-background font-extrabold text-lg h-12 flex items-center justify-center gap-2"
              data-aos="flip-up"
            >
              <Bell className="h-6 w-6" />
              سجل الآن
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
