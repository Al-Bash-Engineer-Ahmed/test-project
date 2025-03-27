import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Contact() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white mb-2">نرى هدفك وطريقة الوصول اليه</h2>
          <p className="text-gold text-lg font-bold">خلنا علي يمينك ونخليك أسعد صاحب مشروع</p>
        </div>

        <div className="bg-blue-900/50 rounded-xl p-5 border border-blue-800">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="bg-white rounded-full p-1.5">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <div className="bg-white rounded-full p-1.5">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white">الاسم</h3>
            <div className="bg-white rounded-full p-1.5">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Behance"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Input type="text" placeholder="الاسم" className="bg-white text-right h-10" />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="نوع الخدمة" className="bg-white text-right h-10" />
            </div>
            <div className="space-y-2">
              <Input type="tel" placeholder="رقم الجوال" className="bg-white text-right h-10" />
            </div>
            <Button className="w-full bg-gold hover:bg-gold/90 text-background font-bold h-10">سجل الآن</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

