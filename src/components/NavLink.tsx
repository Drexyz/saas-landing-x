import Link from 'next/link'

interface NavLinkProps {
  title: string;
  to: string;
}

export const NavLink = ({ title, to }: NavLinkProps) => {
  return (
    <Link href={to} className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
      {title}
    </Link>
  )
}

export default NavLink