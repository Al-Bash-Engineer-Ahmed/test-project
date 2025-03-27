import { Button } from "@/components/ui/button"

export default function Guarantee() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-blue-900/50 border border-blue-500/30 px-6 py-2">
            <h3 className="text-lg font-bold text-white">توفرلك الباقة</h3>
          </div>

          <div className="bg-gold rounded-3xl p-6 w-full">
            <h3 className="text-2xl font-bold text-background mb-4">ضمان الربح</h3>

            <div className="flex items-start gap-3 text-right mb-4">
              <div className="h-4 w-4 rounded-full bg-background mt-1 flex-shrink-0"></div>
              <p className="text-background text-base">تقدر تسترد 50% من فلوسك إذا ما حققت هدف الباقة</p>
            </div>

            <div className="flex items-start gap-3 text-right">
              <div className="h-4 w-4 rounded-full bg-background mt-1 flex-shrink-0"></div>
              <p className="text-background text-base">لأننا نثق بقدرات فريق العمل وندرك أن مخاوفك تزيد يوم بعد يوم</p>
            </div>
          </div>

          <Button className="bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6 px-8 h-auto rounded-full w-full mt-4">
            احجز استشارة الآن
          </Button>
        </div>
      </div>
    </section>
  )
}

