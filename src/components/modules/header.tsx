import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { X } from "lucide-react";
import { Transition } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: " মূলপাতা", path: "/" },
    { name: "বিভাগ সমূহ", path: "/academy" },
    { name: "প্রবন্ধ ও রচনা", path: "/article" },
    { name: "কোর্সসমূহ", path: "/courses" },
    { name: "পরিচিতি", path: "/about" },
  ];

  return (
    <header className="sticky my-container top-4 z-50 border border-gray-200 bg-white backdrop-blur-lg transition-all duration-300 dark:border-[#262E40] dark:bg-[#262E40] rounded-xl shadow-xl">
      <div className="my-container">
        <div className="flex -ml-6 md:h-22 h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link className="flex items-center gap-2 text-teal-600" to="/">
              <span className=" text-xl font-bold text-gray-900 dark:text-white ">
                <img
                  className="w-18 rounded-sm md:w-22"
                  src="../logo.jfif"
                  alt="logo"
                />
              </span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-50 flex items-center gap-2.5">
              <FaSearch />
              <nav>
                <ul className="flex items-center gap-6 text-lg font-bold">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-[#06384E] hover:text-[#2A4976] dark:text-gray-300 dark:hover:text-white transition duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:block rounded-lg bg-[#2A4976] px-6 py-2 text-white font-semibold shadow-md hover:bg-[#315382] transition duration-200"
              >
                যোগাযোগ
              </Link>
              <ModeToggle />
            </div>

            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg bg-gray-100 p-2 text-gray-600 dark:bg-gray-800"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <div className="lg:hidden absolute top-16 right-0 w-70 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg rounded-b-xl">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#2A4976] dark:hover:text-white transition duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center md:hidden rounded-lg bg-[#2A4976] py-2 text-white font-semibold mt-4 hover:bg-[#315382] transition duration-200"
            >
              যোগাযোগ
            </Link>

            <Link className=" text-teal-600" to="/">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                <img className="w-46 -ml-8" src="../logo.png" alt="logo" />
              </span>
            </Link>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
