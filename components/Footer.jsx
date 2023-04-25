import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.copyright}>© {new Date().getFullYear()} Bloggy | All Rights Reserved.</span>
    </div>
  )
}

export default Footer
