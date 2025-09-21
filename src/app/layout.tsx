import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
/* eslint-disable @next/next/no-img-element */

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              <img
                src="/logo.png"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              <img
                src="/icon.png"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
              <ul className="flex items-center gap-2.5">
                <li>3D MODELS</li>
                <li>ABOUT</li>
              </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
