import { ReactNode } from "react"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Marker from "@components/Marker";

interface InnerButtonProps {
  icon?: string | StaticImport
  markerFill?: string
  children: ReactNode
}

interface ButtonProps extends InnerButtonProps {
  href?: string
  containerClassName?: string
  onClick?: () => void
}

const InnerButton = ({
  icon,
  markerFill,
  children
}: InnerButtonProps) => {
  return (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <Image
            src={icon}
            alt="btn-icon"
            width={40}
            height={40}
            className="mr-5 object-contain z-10"
          />
        )}


        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>

        <span className="glow-before glow-after" />
      </span>
    </>
  )
}

export const Button = ({
  href,
  containerClassName = "",
  onClick,
  icon,
  markerFill,
  children
}: ButtonProps) => {
  return href ? (
    <a
      href={href}
      className={`relative, p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName}`}
    >
      <InnerButton icon={icon} markerFill={markerFill}>{children}</InnerButton>
    </a>
  ) : (
    <button
      className={`relative, p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName}`}
      onClick={onClick}
    >
      <InnerButton icon={icon} markerFill={markerFill}>{children}</InnerButton>
    </button>
  )
}

export default Button