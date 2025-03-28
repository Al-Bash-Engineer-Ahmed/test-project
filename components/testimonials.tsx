"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Notifications() {
  const allMessages = [
    {
      id: 1,
      title: "سلة",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 19.99 دولارًا",
      pathImage: "/images/message.jpg",
    },
    {
      id: 2,
      title: "شوبيفاي",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 39.89 دولارًا",
      pathImage: "/images/shopify.png",
    },
    {
      id: 3,
      title: "سلة",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 24.99 دولارًا",
      pathImage: "/images/message.jpg",
    },
    {
      id: 4,
      title: "شوبيفاي",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 49.99 دولارًا",
      pathImage: "/images/shopify.png",
    },
    {
      id: 5,
      title: "سلة",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 59.97 دولارًا",
      pathImage: "/images/message.jpg",
    },
    {
      id: 6,
      title: "شوبيفاي",
      message: "متجرك لديه طلب جديد لعنصر واحد بإجمالي 34.99 دولارًا",
      pathImage: "/images/shopify.png",
    },
  ];

  const [notifications, setNotifications] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTime = Date.now();
    const newNotification = {
      id: currentTime,
      title: allMessages[index].title,
      pathImage: allMessages[index].pathImage,
      message: allMessages[index].message,
      time: currentTime,
    };

    setNotifications((prev) =>
      [
        newNotification,
        ...prev.map((n) => ({ ...n, time: n.time - 60000 })),
      ].slice(0, 5)
    );
  }, [index]);

  return (
    <section className="w-full flex justify-center items-start py-8 bg-background">
      <div className="relative w-[90%] max-w-md h-[300px] overflow-hidden flex flex-col gap-3">
        {notifications.map((notification, i) => {
          const minutesAgo =
            i === 0
              ? "الآن"
              : `${Math.abs(
                  Math.floor((Date.now() - notification.time) / 60000)
                )} دقيقة مضت`;

          return (
            <div
              key={notification.id}
              className="opacity-0 translate-y-[-10px] animate-slideIn w-full"
              style={{ animation: "slideIn 0.4s ease-in-out forwards" }}
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
                  <div className="text-right w-full flex flex-col justify-between">
                    <div className="flex p-2 justify-between">
                      <p className="text-white font-semibold">
                        {notification.title}
                      </p>
                      <p className="text-gray-400 text-xs whitespace-nowrap">
                        {minutesAgo}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

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
