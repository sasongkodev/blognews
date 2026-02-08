"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Initial set
    setTime(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="font-mono text-sm font-medium tabular-nums tracking-wider text-cyan-400">
      {time} WIB
    </div>
  );
}
