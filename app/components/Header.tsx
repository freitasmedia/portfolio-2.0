import Link from "next/link";

export const Header = () => (
  <header className="lg:h-25 py-5 lg:py-0 px-10 flex justify-between items-center gap-10 lg:gap-0 bg-dark-grey">
    <Link
      href="/"
      className="w-20 hover:scale-105 transition-transform duration-300"
    >
      <p>Daniel de Freitas</p>
    </Link>

    <nav className="flex flex-col lg:flex-row gap-2 lg:gap-10">
      <Link href="/projects" className="nav-button">
        Projects
      </Link>
      <Link href="/cv" className="nav-button">
        Contact
      </Link>
      <Link href="/contact" className="nav-button">
        CV
      </Link>
    </nav>
  </header>
);
