import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFound = () => {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    }, 5000)
  },[router])
  return (
    <div className='not-found'>
        <h1>Wow, such empty....</h1>
        <h2>You sure you&apos;re not lost?</h2>
        <p>Only if there was a Link back to the ho.... <br/>Oh here it is: <Link href='/'>HomePage</Link></p>
    </div>
  )
}

export default NotFound