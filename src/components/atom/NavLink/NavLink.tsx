import { Link as LinkScroll } from "react-scroll"

interface NavLinkProps {
  title: string;
  to: string;
  onClick?: () => void;
}

export const NavLink = ({ title, to, onClick }: NavLinkProps) => {
  return (
    <LinkScroll
      to={to}
      spy
      smooth
      offset={-100}
      activeClass="nav-active"
      className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
      onClick={onClick}
    >
      {title}
    </LinkScroll>
  )
}

export default NavLink