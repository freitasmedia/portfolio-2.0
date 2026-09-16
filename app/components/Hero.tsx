import Link from "next/link";

export const Hero = () => (
  <section className="relative w-full min-h-[calc(100svh-100px)] pb-10 lg:pb-20 flex flex-col items-center justify-end bg-[url(/images/hero-img-2.jpg)] bg-cover overflow-hidden">
    <h1 className="absolute inset-0 flex items-center justify-center heading-one bg-[url(/images/hero-img-2.jpg)] bg-cover">
      Text om mig
    </h1>
    <div className="absolute inset-0 top-60 md:top-30 flex items-center justify-center">
      <h3 className="heading-three">
        Contact{" "}
        <Link
          href="/#hotels"
          className="text-nav-button hover:text-nav-button-hover transition-color duration-300"
        >
          me
        </Link>
      </h3>
    </div>
  </section>
);
