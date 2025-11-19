import  Link  from "next/link"
import Image from "next/image"
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
            
            <Image src="icons/pin.svg" alt="logo" width={24} height={24} />

            <p >Evenet</p>

            </Link>
            <ul className="nav-links">
               <Link href="/">Home</Link>
               <Link href="/">Events</Link>
               <Link href="/">Register</Link>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar