"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  return (
    <>
      <h1 className="heading-one text-nav-button">Projects</h1>

      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("library")}
        >
          <h3 className="heading-three">The Library</h3>
          <div className="relative group">
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
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("zoo")}
        >
          <h3 className="heading-three">The Zoo</h3>

          <Image
            src="/theZoo1.png"
            alt="The Zoo"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            Next.js • React • TypeScript • localStorage • Fetch
          </span>
        </div>
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("reactResort")}
        >
          <h3 className="heading-three">React Resort</h3>

          <Image
            src="/reactResort1.png"
            alt="The Zoo"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            Next.js • React • TypeScript • Fetch
          </span>
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-3 gap-4 pt-4">
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("candyrat")}
        >
          <h3 className="heading-three">Candyrat</h3>

          <Image
            src="/godis1.png"
            alt="Candyrat"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            HTML • CSS • TypeScript
          </span>
        </div>
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("toDo")}
        >
          <h3 className="heading-three">To Do</h3>

          <Image
            src="/toDo.png"
            alt="To Do"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            HTML • CSS • TypeScript
          </span>
        </div>
        <div
          className="bg-dark-grey/50 p-4 rounded-xl shadow-xl m-2 cursor-pointer"
          onClick={() => setSelectedProject("raceShop")}
        >
          <h3 className="heading-three">Race Shop</h3>

          <Image
            src="/raceshop.png"
            alt="Race Shop"
            width={600}
            height={1200}
            className="w-full h-80 object-contain rounded-lg"
          />
          <span className="info-text text-nav-button">
            Figma • UX/UI Design
          </span>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-dark-grey p-8 rounded-xl max-w-5xl w-[90%] max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              X
            </button>

            {selectedProject === "library" && (
              <>
                <h2 className="heading-two">The Library</h2>

                <p className="paragraph mt-4">
                  A Next.js/React app that can search for books and add them to
                  your own reading-list, using MongoDB to keep your reading-list
                  saved.
                </p>

                <Image
                  src="/theLib.png"
                  alt="The Library"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />
                <Link
                  href="https://github.com/freitasmedia/theLibrary"
                  target="_blank"
                  rel="noopener norefferer"
                  className="nav-button mt-6 inline-block"
                >
                  Github
                </Link>
              </>
            )}

            {selectedProject === "zoo" && (
              <>
                <h2 className="heading-two">The Zoo</h2>

                <p className="paragraph mt-4">
                  A Next.js/React app that displays animals from an API,
                  featuring a detailed animal page, feeding functionality, and
                  state management saved in localStorage.
                </p>

                <Image
                  src="/theZoo6.png"
                  alt="The Zoo"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />

                <Link
                  href="https://github.com/freitasmedia/theZoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block mr-2"
                >
                  Github
                </Link>

                <Link
                  href="https://github.com/freitasmedia/theZoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block"
                >
                  Demo
                </Link>
              </>
            )}

            {selectedProject === "reactResort" && (
              <>
                <h2 className="heading-two">React Resort</h2>

                <p className="paragraph">
                  A group project app for managing a resort, featuring room
                  booking, customer management, and bookings.
                </p>

                <Image
                  src="/reactResort2.png"
                  alt="React Resort"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />

                <Link
                  href="https://github.com/freitasmedia/ReactResor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block mr-2"
                >
                  Github
                </Link>

                <Link
                  href="https://github.com/freitasmedia/ReactResor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block"
                >
                  Demo
                </Link>
              </>
            )}

            {selectedProject === "candyrat" && (
              <>
                <h2 className="heading-two">Candyrat</h2>

                <p className="paragraph">
                  A group e-commerce project with focus on UI and shopping cart
                  logic. I made the navbar and shopping cart functionality.
                </p>

                <Image
                  src="/godis2.png"
                  alt="Candy Rat"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />

                <Link
                  href="https://github.com/freitasmedia/godis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block"
                >
                  Github
                </Link>
              </>
            )}

            {selectedProject === "toDo" && (
              <>
                <h2 className="heading-two">To Do</h2>

                <p className="paragraph">
                  Task manager with localStorage and dynamic UI updates.
                </p>

                <Image
                  src="/toDo.png"
                  alt="To Do"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />

                <Link
                  href="https://github.com/freitasmedia/todos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block mr-2"
                >
                  Github
                </Link>

                <Link
                  href="https://github.com/freitasmedia/todos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block"
                >
                  Demo
                </Link>
              </>
            )}

            {selectedProject === "raceShop" && (
              <>
                <h2 className="heading-two">Race Shop</h2>

                <p className="paragraph">
                  I made the design for a motorcycle parts e-commerce platform.
                </p>

                <Image
                  src="/raceshop.png"
                  alt="Race Shop"
                  width={600}
                  height={1200}
                  className="w-full max-h-[500px] object-contain rounded-lg mt-6"
                />

                <Link
                  href="https://www.figma.com/design/hymuZT7no0WHYRf4fsAaFr/RaceShop.se?t=ZDnSfi7fL7nGZvF1-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button mt-6 inline-block"
                >
                  Figma
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
