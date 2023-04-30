import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>Wow, such empty....</h1>
        <h2>You sure you&apos;re not lost?</h2>
        <p>Only if there was a Link back to the ho.... <br/>Oh here it is: <Link href='/'>HomePage</Link></p>
    </div>
  )
}

export default NotFound