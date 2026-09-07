import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="heading-two text-center">Projects</h1>

      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">The Library</h3>
          <Image
            src="/theLib.png"
            alt="The Library"
            width={600}
            height={1200}
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
          <p className="paragraph">
            A Next.js/React app that can search for books and and add them to
            your own reading-list, using MongoDB to keep your reading-list
            saved.
          </p>
        </div>
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">The Zoo</h3>
          <Image
            src="/theZoo.png"
            alt="The Zoo"
            width={600}
            height={200}
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
          <p className="paragraph">
            A Next.js/React app that displays animals from an API, featuring a
            detailed animal page, feeding functionality, and state management
            saved in localStorage.
          </p>
        </div>
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">React Resort</h3>
          <p className="paragraph">
            A Next.js/React app for managing a resort, featuring room booking,
            staff management, and customer reviews.
          </p>
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">Candyrat</h3>
          <Image
            src="/g-home-d.png"
            alt="Candyrat"
            width={600}
            height={1200}
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
          <p className="paragraph">
            Group e-commerce project with focus on UI and shopping cart logic. I
            made the navbar and shopping cart functionality.
          </p>
        </div>
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">To Do</h3>
          <Image
            src="/t-home.png"
            alt="To Do"
            width={600}
            height={1200}
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
          <p className="paragraph">
            Task manager with localStorage and dynamic UI updates.
          </p>
        </div>
        <div className="bg-dark-grey p-4 rounded-xl">
          <h3 className="heading-three text-nav-button">Race Shop</h3>
          <Image
            src="/rs-desk.png"
            alt="Race Shop"
            width={600}
            height={1200}
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
          <p className="paragraph">
            I made the design for a motorcycle parts e-commerce platform.
          </p>
        </div>
      </div>
    </>
  );
}
