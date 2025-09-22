import Image from "next/image"
import Link from "next/link"


export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <div className="relative">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="PrintForge Logo"
              width={480}
              height={122}
              className="w-[200px] h-auto hidden md:block"
            />
            <Image
              src="/icon.png"
              alt="PrintForge Logo"
              width={78}
              height={79}
              className="w-[40px] h-auto block md:hidden"
            />
          </Link>
        </div>
        <ul className="flex items-center gap-2.5">
          <li><Link href="/3d-models">3D MODELS</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}
