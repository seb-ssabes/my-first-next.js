"use client"

import Link from "next/link"
import type { NavLinkProps } from "@/app/types"
import { usePathname } from "next/navigation"


export default function NavLink({href, children}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer
        hover:text-orange-400 ${isActive ? "text-orange-400 underline decoration-orange-400" : ""}`}
      >
        {children}
      </Link>

    </li>
  )
}
