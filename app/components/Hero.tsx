import Link from "next/link";
import Image from "next/image";

export const Hero = () => (
  <section className="relative isolate flex min-h-[calc(100svh-6.25rem)] items-start overflow-hidden bg-dark-grey px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
    <Image
      src="/meMustang.png"
      alt="Daniel in a mustang"
      fill
      priority
      sizes="100vw"
      className="-z-20 object-cover object-[58%_center]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-gradient-to-t from-dark-grey via-dark-grey/65 to-dark-grey/10 lg:bg-gradient-to-r lg:from-dark-grey lg:via-dark-grey/80 lg:to-dark-grey/5"
    />

    <div className="w-full max-w-7xl">
      <div className="relative z-10 max-w-2xl">
        <h1 className="heading-one text-nav-button text-[clamp(1.25rem,7vw,2.25rem)] sm:text-4xl md:text-5xl lg:text-6xl tracking-[clamp(0.1rem,calc(2vw_-_0.3rem),1.5rem)] whitespace-nowrap">
          Frontend Developer
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          I’m Daniel, a frontend developer with a background in photography and
          video production. I enjoy motorsports, trackdays and video games.{" "}
          <br /> I’m a team player who works hard, but always makes time for a
          laugh!
        </p>

        <Link
          href="mailto:freitasmedia@gmail.com"
          className="mt-8 inline-flex rounded-full border border-nav-button/70 px-6 py-3 text-sm font-medium text-nav-button transition-colors duration-300 hover:bg-nav-button hover:text-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-button"
        >
          Contact me
        </Link>
      </div>
    </div>
  </section>
);
