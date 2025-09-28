import type React from "react"
import { Playfair_Display, Montserrat, Lora } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata = {
  title: "Sasvi Creations - Best Bridal Makeup Artist | Professional Makeup Services",
  description:
    "Professional bridal and party makeup services by Sasvi Creations. Enhance your natural beauty with luxury makeup for weddings, parties, and commercial shoots.",
  keywords: "bridal makeup, party makeup, wedding makeup artist, professional makeup services, luxury makeup",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" href="/images/sasvi-logo.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
