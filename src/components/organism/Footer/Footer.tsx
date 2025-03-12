import { SOCIALS } from "@constants"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">

          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {SOCIALS.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <div className="relative size-1/3">
                    <Image
                      src={icon}
                      alt={title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer