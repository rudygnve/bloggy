import React from 'react'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Bloggy</Link>
        <BiSearch className={styles.searchBtn} />
      </div>
    </div>
  )
}

export default Navbar
