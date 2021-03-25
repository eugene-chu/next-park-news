import Link from 'next/link'

const Nav = () => {
  return(
  <>
    <nav>
      <ul>
        <li>
          <Link href='/dashboard'>Home</Link>
        </li>
        <li>
          <Link href='/dashboard/search'>Search</Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Nav;