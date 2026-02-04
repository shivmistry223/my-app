"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navArray = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];
  const pathname = usePathname();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {navArray.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              style={{
                fontWeight: isActive ? "bold" : "normal",
                marginRight: "1rem",
              }}
              key={item.href}
              href={item.href}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
}
