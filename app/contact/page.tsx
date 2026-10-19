import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-6.25rem)] items-start overflow-hidden bg-dark-grey px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
      <Image
        src="/contact.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center] lg:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-grey via-dark-grey/65 to-dark-grey/10 lg:from-dark-grey lg:via-dark-grey/80 lg:to-dark-grey/5"
      />

      <div className="w-full max-w-7xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="heading-one text-left text-nav-button text-[clamp(1.25rem,4vw,3.5rem)] tracking-[clamp(0.1rem,calc(1vw_-_0.1rem),1rem)] whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl">
            Contact
          </h1>
          <h2 className="mt-6 text-2xl font-medium text-white sm:text-3xl">
            Daniel de Freitas
          </h2>

          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href="mailto:freitasmedia@gmail.com"
              className="inline-flex rounded-full border border-nav-button/70 px-6 py-3 text-sm font-medium text-nav-button transition-colors duration-300 hover:bg-nav-button hover:text-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-button"
            >
              freitasmedia@gmail.com
            </a>
            <a
              href="tel:+46735098834"
              className="inline-flex rounded-full border border-nav-button/70 px-6 py-3 text-sm font-medium text-nav-button transition-colors duration-300 hover:bg-nav-button hover:text-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-button"
            >
              +46 73 509 88 34
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
