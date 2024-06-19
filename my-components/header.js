import React, { useState, useEffect } from 'react'
import styles from "styles/header.module.css"
import Link from 'next/link'
import { MdDashboard } from "react-icons/md";
const Header = () => {
  const [logStatus, setLogStatus] = useState(null)
  let website = "Max"


  const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    let log_status = localStorage.getItem("log_status")
    if (JSON.parse(log_status) == true) {
      setLogStatus(true)
    } else {
      setLogStatus(false)
    }
    console.log(log_status , logStatus);
  }, [count,logStatus]);


  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}><Link href="/" className={styles.anchor}><span>#</span>{website} </Link></div>
        <section className={styles.links}>

          <div className={styles.navLinks}>
            <li><Link href="/" className={styles.anchor}>Home</Link></li>
            <li><Link href="/" className={styles.anchor}>Rates</Link></li>
            {/* <li><Link href="/" className={styles.anchor}>Login</Link></li> */}
            {/* <li><Link href="/" className={styles.anchor}>Home</Link></li>
                <li><Link href="/" className={styles.anchor}>Home</Link></li> */}
          </div>
          {/* <button className={styles.login} onclick="window.location.href = 'http:/\/127.0.0.1:5500/login';"><img src="user.png" alt=""/> Login</button> */}
          {(logStatus == true) ? <Link className={styles.dashboard} href="/member/dashboard"><MdDashboard /> Dashboard</Link> : (
          <>
          <div className={styles.login_container}>

          <Link className={styles.login_btn} href="/auth/login"> Login</Link>
          <Link className={styles.signup_btn} href="/auth/signup"><img src="/user.png" alt="" /> Signup</Link>
          </div>
          </>
        )}

          {/* <button className={styles.login} onclick="window.location.href = 'http:/\/127.0.0.1:5500/login';"><img src="user.png" alt=""/> Signup</button> */}
          <section className={styles.userSection}>
            <button className={styles.user} onClick={() => { user() }}><img src="/user.png" alt="" /><span></span></button>

            <div className={styles.menu}>
              <section className={styles.triangle}></section>
              <div>Profile</div>
              <div>Courses</div>
              <div>Favorite</div>
              <div>Tutorials</div>
              <section className={styles.logout_container}><button onClick={() => { logout() }} className={styles.logout_btn}>Logout</button></section>
            </div>
          </section>
        </section>
      </nav>
    </>
  )
}

export default Header
