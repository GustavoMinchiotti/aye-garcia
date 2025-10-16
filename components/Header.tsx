"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const breadcrumb =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname.replace("/dashboard/", "").replace("-", " ");

  return (
    <div className="flex items-center justify-between h-16 px-4 md:px-8 bg-base-clara border-b border-contraste-3 shadow-sm">
      <h1 className="text-lg font-semibold text-contraste-1 capitalize tracking-wide">
        {breadcrumb}
      </h1>

      <Link
        href="/dashboard/profile"
        className="flex items-center gap-2 text-sm text-contraste-4 hover:text-acento-1 transition"
      >
        <UserCircle size={22} />
        <span>Mi perfil</span>
      </Link>
    </div>
  );
}
