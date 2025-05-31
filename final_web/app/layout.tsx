import "./globals.css";
import { Inter } from "next/font/google"
import { Header } from "./components/glam/Header"
import { Footer } from "./components/glam/Footer"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GlamGiant Inc.",
  description: "Belleza indestructible, poder absoluto.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-glamPink text-glamBlack`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
