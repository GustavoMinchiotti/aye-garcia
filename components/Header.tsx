"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center gap-4">
        {/* Breadcrumb simple */}
        <div className="text-sm text-contraste-3">
          {pathname === "/dashboard"
            ? "Dashboard"
            : pathname.replace("/dashboard/", "")}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/profile"
          className="text-sm px-3 py-1 rounded-md hover:bg-acento-1/10"
        >
          Mi perfil
        </Link>
      </div>
    </div>
  );
}
