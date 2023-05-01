import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <Image src="/logo.png" width={135} height={65} alt='Logo was supposed to be here.'/>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/servants">Servants</Link>
    </nav>
  )
}

export default Navbar