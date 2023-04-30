import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h1>Fate List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/servants">Servants</Link>
    </nav>
  )
}

export default Navbar