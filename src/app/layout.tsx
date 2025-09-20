import "./globals.css";
/* eslint-disable @next/next/no-img-element */


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
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
