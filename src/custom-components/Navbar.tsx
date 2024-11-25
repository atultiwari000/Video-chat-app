"use client";

import { Monitor } from "lucide-react";
import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
import Login from "../components/Login";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center space-x-2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1.3rem",
          }}
        >
          <Monitor className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ScreenShare</span>
        </Link>
        <Login />
      </div>
    </nav>
  );
}
