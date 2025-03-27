import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  return (
    <section className="w-full pb-12 bg-background">
      <div className="container px-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="feature-card border-0 overflow-hidden">
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">20X</h3>
              <p className="text-white/80 text-sm leading-tight">حقق نتائج أسرع بـ20 مرة من خلال الإعلانات</p>
            </CardContent>
          </Card>

          <Card className="feature-card border-0 overflow-hidden">
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">+80 ساعة</h3>
              <p className="text-white/80 text-sm leading-tight">وفر أكثر من 80 ساعة من العمل اليدوي</p>
            </CardContent>
          </Card>

          <Card className="feature-card border-0 overflow-hidden">
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">20X</h3>
              <p className="text-white/80 text-sm leading-tight">حقق نتائج أسرع بـ20 مرة من خلال الإعلانات</p>
            </CardContent>
          </Card>

          <Card className="feature-card border-0 overflow-hidden">
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">+500 دولار</h3>
              <p className="text-white/80 text-sm leading-tight">وفر أكثر من 500 دولار على تكاليف كتابة المحتوى</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

