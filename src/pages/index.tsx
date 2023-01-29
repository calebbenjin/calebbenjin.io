import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb Benjamin || ReactJS Expert || Frontend Engineer</title>
      </Head>
      <Hero />
    </>
  )
}
