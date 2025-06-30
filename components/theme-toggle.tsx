"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={theme === "light" && isMounted ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Sun />
      </Button>
      <Button
        variant={theme === "dark" && isMounted ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Moon />
      </Button>
    </div>
  );
}
