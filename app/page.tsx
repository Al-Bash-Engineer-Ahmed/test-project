import Hero from "@/components/hero"
import Features from "@/components/features"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import Portfolio from "@/components/portfolio"
import Guarantee from "@/components/guarantee"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import AOSInitializer from "@/components/ui/AOSInitializer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background">
      <AOSInitializer />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Portfolio />
      <Guarantee />
      <Faq />
      <Contact />
      <Footer />
      <CookieConsent />
    </main>
  );
}

