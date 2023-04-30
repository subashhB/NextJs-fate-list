import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita aut ipsum sit exercitationem, corrupti optio minima, esse et, maiores vero cum deleniti molestiae. Natus quas nulla repellat consectetur fugit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita aut ipsum sit exercitationem, corrupti optio minima, esse et, maiores vero cum deleniti molestiae. Natus quas nulla repellat consectetur fugit.</p>
      <Link className={styles.btn} href="/servants">See all Servants</Link>
    </div>
  )
}
