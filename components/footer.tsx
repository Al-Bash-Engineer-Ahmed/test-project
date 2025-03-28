import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-blue-900/30">
      <div className="container px-4 max-w-md mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6" data-aos="fade-up">
            <div className="relative w-16 h-16">
              <Image
                src="images/logo.png"
                alt="Wiz Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading & Description */}
          <h2
            className="text-xl font-bold text-white mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            امتلك متجرا احترافيا في وز
          </h2>
          <p
            className="text-white/70 text-sm mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو
            مبيعاتك وتسويق منتجاتك
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=966566599744"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-white hover:bg-white/90 text-blue-900 font-bold text-base py-3 px-6 h-auto rounded-full mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              أبدأ الآن
            </Button>
          </a>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-right w-full mb-8">
            {[
              {
                name: "إدارة المشاريع",
                link: "https://www.wizfreelance.com/services/إدارة-المشاريع",
              },
              {
                name: "تحسين محركات البحث",
                link: "https://www.wizfreelance.com/services/تحسين-محركات-البحث",
              },
              {
                name: "تصاميم السوشيال ميديا",
                link: "https://www.wizfreelance.com/services/تصاميم-السوشيال-ميديا",
              },
              {
                name: "خدمة إدخال البيانات",
                link: "https://www.wizfreelance.com/services/خدمة-ادخال-البيانات",
              },
              {
                name: "إدارة محتوى وسائل التواصل",
                link: "https://www.wizfreelance.com/services/إدارة-محتوى-وسائل-التواصل",
              },
              {
                name: "إدارة المتاجر الإلكترونية",
                link: "https://www.wizfreelance.com/services/إدارة-المتاجر-الإلكترونية",
              },
              {
                name: "تصميم وبرمجة التطبيقات",
                link: "https://www.wizfreelance.com/services/تصميم-وبرمجة-التطبيقات",
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="text-white text-sm font-medium"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.name}
              </a>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white font-bold mb-3 text-center">
              النشرة البريدية
            </h3>
            <p className="text-white/70 text-sm text-center mb-4">
              اشترك في نشرتنا البريدية واحصل على مقالات حصرية عن تسويق المتاجر
              الإلكترونية.
            </p>
            <div className="flex">
              <Button
                className="bg-blue-900 hover:bg-blue-800 text-white h-10 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Button>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 bg-white text-right h-10 mx-2"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div
            className="mt-6 text-white/50 text-xs"
          ></div>
        </div>
      </div>
    </footer>
  );
}
