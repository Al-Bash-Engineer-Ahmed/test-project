"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 900,
        once: true,
        easing: "ease-in-out",
      });
    }
  }, []);

  return null;
}
