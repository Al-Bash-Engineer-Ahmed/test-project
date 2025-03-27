import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-blue-900/30">
      <div className="container px-4 max-w-md mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="relative w-16 h-16">
              <Image src="/placeholder.svg?height=64&width=64" alt="Wiz Logo" fill className="object-contain" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-2">امتلك متجرا احترافيا في وز</h2>
          <p className="text-white/70 text-sm mb-6">
            أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق منتجاتك
          </p>

          <Button className="bg-white hover:bg-white/90 text-blue-900 font-bold text-base py-3 px-6 h-auto rounded-full mb-8">
            أبدأ الآن
          </Button>

          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-right w-full mb-8">
            <div>
              <h3 className="text-white text-sm font-medium">إدارة المشاريع</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">تحسين محركات البحث</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">تصاميم السوشيال ميديا</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">خدمة إدخال البيانات</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">إدارة محتوى وسائل التواصل</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">إنتاج وإخراج الإعلانات</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">إدارة المتاجر الإلكترونية</h3>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">تصميم وبرمجة التطبيقات</h3>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-white font-bold mb-3 text-center">النشرة البريدية</h3>
            <p className="text-white/70 text-sm text-center mb-4">
              اشترك في نشرتنا البريدية واحصل على مقالات حصرية عن تسويق المتاجر الإلكترونية.
            </p>
            <div className="flex">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white h-10 px-3">
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
              <Input type="email" placeholder="البريد الإلكتروني" className="flex-1 bg-white text-right h-10" />
            </div>
          </div>

          <div className="mt-6 text-white/50 text-xs">1 / 1</div>
        </div>
      </div>
    </footer>
  )
}

