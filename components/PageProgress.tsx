"use client";

import { useEffect, useState } from "react";

export function PageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-px w-full bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-blue to-green transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
