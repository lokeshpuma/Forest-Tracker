"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { hasSession } from "@/lib/auth"

const PUBLIC_PATHS = ["/login", "/register"]

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const isPublic = PUBLIC_PATHS.includes(pathname)
    const session = hasSession()

    if (!isPublic && !session) {
      router.replace("/login")
      return
    }

    if (isPublic && session) {
      router.replace("/")
    }
  }, [pathname, router])

  return <>{children}</>
}
