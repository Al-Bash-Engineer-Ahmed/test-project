"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Notifications() {
  const allMessages = [
    {
      id: 1,
      title: "Message",
      message: "Your store has a new order for 1 item totaling $19.99",
    },
    {
      id: 2,
      title: "Shopify",
      message: "Your store has a new order for 1 item totaling $39.89",
    },
    {
      id: 3,
      title: "Message",
      message: "Your store has a new order for 1 item totaling $24.99",
    },
    {
      id: 4,
      title: "Shopify",
      message: "Your store has a new order for 1 item totaling $49.99",
    },
    {
      id: 5,
      title: "Message",
      message: "Your store has a new order for 1 item totaling $59.97",
    },
    {
      id: 6,
      title: "Shopify",
      message: "Your store has a new order for 1 item totaling $34.99",
    },
  ];

  const imagePaths = [
    "/images/message.jpg",
    "/images/shopify.png",
    "/images/message.jpg",
    "/images/shopify.png",
    "/images/message.jpg",
    "/images/shopify.png",
  ];

  const [notifications, setNotifications] = useState<
    {
      id: number;
      message: string;
      time: number;
      title: string;
      pathImage: string;
    }[]
  >([]);

  const indexRef = useRef(0); // Keeps index value across re-renders

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();

      setNotifications((prev) => {
        const newIndex = indexRef.current % allMessages.length;
        const imageIndex = Math.floor(Math.random() * imagePaths.length); // Random image selection

        const newNotification = {
          id: currentTime,
          title: allMessages[newIndex].title,
          pathImage: imagePaths[imageIndex], // Randomly assigned image
          message: allMessages[newIndex].message,
          time: currentTime,
        };

        indexRef.current += 1;

        return [
          newNotification,
          ...prev.map((n) => ({ ...n, time: n.time - 60000 })),
        ].slice(0, 5);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center items-start py-8 bg-background">
      <div className="relative w-[90%] max-w-md h-[300px] overflow-hidden flex flex-col gap-3">
        {notifications.map((notification, i) => {
          const minutesAgo =
            i === 0
              ? "Just now"
              : `${Math.abs(
                  Math.floor((Date.now() - notification.time) / 60000)
                )}m ago`;

          return (
            <div
              key={notification.id}
              className="opacity-0 translate-y-[-10px] animate-slideIn w-full"
              style={{
                animation: "slideIn 0.4s ease-in-out forwards",
              }}
            >
              <Card className="bg-gray-900/80 border border-gray-700 rounded-xl shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-white rounded-lg flex-shrink-0">
                    <img
                      src={notification.pathImage}
                      className="h-10 w-10 rounded-lg"
                      alt={notification.title}
                    />
                  </div>
                  <div className="text-left w-full flex justify-between">
                    <div>
                      <p className="text-white font-semibold">
                        {notification.title}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {notification.message}
                      </p>
                    </div>
                    <p className="text-gray-400 text-xs whitespace-nowrap">
                      {minutesAgo}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Embedded CSS for animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
