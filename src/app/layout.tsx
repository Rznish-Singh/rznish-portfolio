import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config/site"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteBottomNav } from "@/components/site-bottom-nav"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Portfolio`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={sourceSerif.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative isolate">
            <SiteHeader />
            <main className="min-h-[60svh]">{children}</main>
            <SiteFooter />
            <SiteBottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}