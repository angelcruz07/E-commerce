'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const LinkClient = ({ route, texto }) => {
  const pathName = usePathname()
  return (
    <Link
      className={`link ${pathName === route ? 'nav-link active' : 'nav-link'}`}
      href={route}>
      {texto}
    </Link>
  )
}

export default LinkClient
