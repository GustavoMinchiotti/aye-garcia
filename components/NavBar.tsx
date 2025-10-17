'use client'

import Link from 'next/link'

interface NavBarProps {
  userRole: string | null
}

export default function NavBar({ userRole }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-base-media shadow-md">
      <Link href="/" className="font-bold text-xl text-contraste-1 hover:text-acento-1">
        Aye García
      </Link>

      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="px-3 py-2 rounded-lg hover:bg-base-oscura transition-colors"
        >
          Dashboard
        </Link>

        {userRole === 'admin' && (
          <Link
            href="/admin"
            className="px-3 py-2 rounded-lg bg-acento-2 text-white font-semibold hover:bg-acento-1 transition-colors"
          >
            Panel Admin
          </Link>
        )}
      </div>
    </nav>
  )
}
