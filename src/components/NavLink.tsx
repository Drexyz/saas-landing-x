import { Link as LinkScroll } from "react-scroll"

interface NavLinkProps {
  title: string;
  to: string;
}

export const NavLink = ({ title, to }: NavLinkProps) => {
  return (
    <LinkScroll to={to} className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
      {title}
    </LinkScroll>
  )
}

export default NavLink