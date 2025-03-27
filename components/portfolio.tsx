"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Portfolio() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white mb-2">نبذة عن بعض اعمالنا</h2>
          <p className="text-white/70 text-sm">
            استكشف بعضًا من أعمالنا المتميزة التي تعكس احترافيتنا وجودة خدماتنا البرمجية في تحويل الأفكار إلى حلول رقمية
            مبتكرة
          </p>
        </div>

        <Tabs defaultValue="sales" className="w-full">
          <TabsList className="grid grid-cols-3 bg-transparent mb-4">
            <TabsTrigger value="sales" className="text-white data-[state=active]:text-gold">
              المبيعات
            </TabsTrigger>
            <TabsTrigger value="marketing" className="text-white data-[state=active]:text-gold">
              التسويق
            </TabsTrigger>
            <TabsTrigger value="design" className="text-white data-[state=active]:text-gold">
              التصميم
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-blue-900">المبيعات</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-gray-700">اجمالي المبيعات</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-gray-700">تكاليف المنتجات</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-gray-700">كوبونات التخفيض</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-gray-700">الشحن</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">الضرائب</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-gray-700">رسوم الدفع</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-500">+60.25%</span>
                  <span className="text-gray-700 font-bold">صافي المبيعات</span>
                  <span className="text-red-500">-120.25%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">الطلبات</span>
                  <span className="text-green-500">+40.25%</span>
                  <span className="text-red-500">-120.25%</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-16 w-full bg-gray-100 rounded-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-px w-full bg-gray-300"></div>
                  </div>
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 400 100" className="h-full w-full">
                      <path
                        d="M0,50 C50,30 100,70 150,50 C200,30 250,70 300,50 C350,30 400,70 450,50"
                        fill="none"
                        stroke="blue"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,70 C50,50 100,90 150,70 C200,50 250,90 300,70 C350,50 400,90 450,70"
                        fill="none"
                        stroke="red"
                        strokeDasharray="5,5"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-white rounded-full p-2">
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
              <button className="bg-white rounded-full p-2">
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </TabsContent>

          <TabsContent value="marketing">
            <div className="bg-white rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold text-blue-900">محتوى التسويق</h3>
              <p className="text-gray-700 mt-2 text-sm">بيانات التسويق والحملات الإعلانية</p>
            </div>
          </TabsContent>

          <TabsContent value="design">
            <div className="bg-white rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold text-blue-900">محتوى التصميم</h3>
              <p className="text-gray-700 mt-2 text-sm">نماذج من تصاميمنا وأعمالنا الإبداعية</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

