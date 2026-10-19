import Link from "next/link";
import Image from "next/image";
import { Power } from "lucide-react";

export const Header = () => (
  <header className="lg:h-19 py-5 lg:py-0 px-10 flex justify-between items-center gap-10 lg:gap-0 bg-dark-grey">
    <Link href="/" className="hover:text-[#d9d24c]">
      <Power size={24} />
    </Link>

    <nav className="flex flex-col lg:flex-row gap-2 lg:gap-10">
      <Link href="/projects" className="nav-button">
        Projects
      </Link>
      <Link href="/contact" className="nav-button">
        Contact
      </Link>
    </nav>
  </header>
);
