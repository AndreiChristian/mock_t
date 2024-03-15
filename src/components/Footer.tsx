import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (

    <footer className="">
      <div className="text-foreground bg-background px-4 py-12 mx-auto  overflow-hidden max-w-full sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Next.js
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Remix
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Svelte
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Alpine.js
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Tailwind
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-rosePineDawn-text hover:text-rosePineDawn-iris">
              Partners
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">
                Instagram
                <Instagram width={5} height={5} color="red" />
              </span>
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">
                twitter
                <Facebook />
              </span>
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">
                Instagram
                <Youtube />
              </span>
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">
                Linkedin
              </span>
            </a>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2020 - 2021
            <a href="https://unwrapped.design" className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
              @unwrappedHQ
            </a>
            .Since 2020
          </span>
        </p>
      </div>
    </footer>
  )
}
