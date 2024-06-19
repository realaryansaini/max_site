import React from 'react'
import styles from "styles/footer.module.css"
const Footer = (props) => {
  const { website } = props
  return (
    <>
      <footer className={styles.footer}>
        <section>
          <div className={styles.logo}># {website}</div>
          <span>|</span>
          <div>Copyright © 2024 CodeWithAryan.com</div>
        </section>
        <div className={styles.socialLinks}>
          <img src="/facebook.png" alt="" />
          <img src="/instagram.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/github.png" alt="" />
        </div>
      </footer>
    </>
  )
}

export default Footer
