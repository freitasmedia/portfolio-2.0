import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="heading-one text-nav-button">Projects</h1>

      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">The Library</h3>
          <div className="relative group">
            <p className="paragraph m-2">
              A Next.js/React app that can search for books and add them to your
              own reading-list, using MongoDB to keep your reading-list saved.
            </p>
            <Image
              src="/theLib.png"
              alt="The Library"
              width={600}
              height={1200}
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
          <span className="info-text text-nav-button">
            Next.js • React • TypeScript • MongoDB • Fetch
          </span>
        </div>
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">The Zoo</h3>
          <p className="paragraph">
            A Next.js/React app that displays animals from an API, featuring a
            detailed animal page, feeding functionality, and state management
            saved in localStorage.
          </p>
          <Image
            src="/theZoo.png"
            alt="The Zoo"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            Next.js • React • TypeScript • localStorage • Fetch
          </span>
        </div>
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">React Resort</h3>
          <p className="paragraph">
            A group project app for managing a resort, featuring room booking,
            customer management, and bookings.
          </p>
          <span className="info-text text-nav-button">
            Next.js • React • TypeScript • Fetch
          </span>
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">Candyrat</h3>
          <p className="paragraph">
            A group e-commerce project with focus on UI and shopping cart logic.
            I made the navbar and shopping cart functionality.
          </p>
          <Image
            src="/g-home-d.png"
            alt="Candyrat"
            width={600}
            height={1200}
            className="rounded-lg "
          />
          <span className="info-text text-nav-button">
            HTML • CSS • TypeScript
          </span>
        </div>
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">To Do</h3>
          <p className="paragraph">
            Task manager with localStorage and dynamic UI updates.
          </p>
          <Image
            src="/t-home.png"
            alt="To Do"
            width={600}
            height={1200}
            className="rounded-lg "
          />
          <span className="info-text text-nav-button">
            HTML • CSS • TypeScript
          </span>
        </div>
        <div className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2">
          <h3 className="heading-three">Race Shop</h3>
          <p className="paragraph">
            I made the design for a motorcycle parts e-commerce platform.
          </p>
          <Image
            src="/rs-desk.png"
            alt="Race Shop"
            width={600}
            height={1200}
            className="rounded-lg "
          />
          <span className="info-text text-nav-button">
            Figma • UX/UI Design
          </span>
        </div>
      </div>
    </>
  );
}
