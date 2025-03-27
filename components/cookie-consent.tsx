"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("cookieConsent")
    if (!hasConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = async () => {
    try {
      localStorage.setItem("cookieConsent", "true")
      setShowConsent(false)
    } catch (error) {
      console.error("Error saving cookie consent:", error)
    }
  }

  const acceptNecessary = async () => {
    try {
      localStorage.setItem("cookieConsent", "necessary")
      setShowConsent(false)
    } catch (error) {
      console.error("Error saving cookie consent:", error)
    }
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white">نحن نستخدم ملفات تعريف الارتباط</h3>
            <Button
              onClick={() => setShowConsent(false)}
              variant="ghost"
              className="text-white hover:bg-blue-800 p-1 h-auto"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">إغلاق</span>
            </Button>
          </div>

          <p className="text-white/80 text-sm">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا وتقديم محتوى مخصص لك.
          </p>

          <div className="flex gap-2">
            <Button
              onClick={acceptNecessary}
              variant="outline"
              className="flex-1 bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
            >
              الضرورية فقط
            </Button>
            <Button onClick={acceptAll} className="flex-1 bg-gold hover:bg-gold/90 text-blue-900 font-bold">
              قبول الكل
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

