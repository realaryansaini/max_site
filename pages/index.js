import React, { useRef } from 'react'
import styles from "styles/home.module.css"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '@/my-components/footer'
import Link from 'next/link'
import Header from '@/my-components/header'
// import Head from "ne"
import Head from 'next/head'

const Index = () => {

    const [logStatus , setLogStatus] = useState()
    let website = "Max"


    const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    let log_status = localStorage.getItem("log_status") 
    if (JSON.parse(log_status) == true){
        setLogStatus(true)
    }else{
     setLogStatus(false)
    }
  }, [count]);
  // const [inputValue, setInputValue] = useState()
  // const ref = useRef()
//   const website = "MAX"
  return (
    <>
    <Head>
        <title>Home | #Max</title>
    </Head>
     <Header/>
      {/* <nav className={styles.nav}>
        <div className={styles.logo}><span>#</span>{website}</div>
        <section className={styles.links}>

            <div className={styles.navLinks}>
                <li>Home</li>
                <li>Rates</li>
                <li>Courses</li>
                <li>Books</li>
            </div>
            <Link className={styles.login} href="/login"><img src="user.png" alt=""/> Login</Link>
            <section  className={styles.userSection}>
                <button className={styles.user} onclick="user()"><img src="user.png" alt=""/><span></span></button>
                
                <div className={styles.menu}>
                    <section className={styles.triangle}></section>
                    <div>Profile</div>
                    <div>Courses</div>
                    <div>Favorite</div>
                    <div>Tutorials</div>
                    <section className={styles.logout_container}><button onclick="logout()" className={styles.logout_btn}>Logout</button></section>
                </div>
            </section>
        </section>
    </nav> */}


    <div className={styles.container}>
        <div className={styles.landing_info}>
            <div className={styles.title}>
            Link Shortening Platform that <span id={styles.courses}>Pays</span> You Every Click
            </div>
            <div className={styles.dec}>
                <p>

            Revolutionize the way you share links and earn passive income with our cutting-edge link shortening platform. 
                </p>
                <p>
            Transform every click into a money-making opportunity and watch your earnings grow with each shared link. 
                </p>
            </div>

            {(logStatus == true) ? <Link href="/member/dashboard" className={styles.explore}>Go To Dashboard</Link> :  <Link href="/auth/signup" className={styles.explore}>Get Started</Link>}
    </div>
    <div className={styles.img}>
        <img src="/photo.svg" alt=""/>
    </div>
   </div>

   {/* <footer className={styles.footer}>
    <section>
        <div className={styles.logo}># {website}</div>
        <span>|</span>
        <div>Copyright © 2024 CodeWithAryan.com</div>
    </section>
    <div className={styles.socialLinks}>
        <img src="facebook.png" alt=""/>
        <img src="instagram.png" alt=""/>
        <img src="twitter.png" alt=""/>
        <img src="github.png" alt=""/>
    </div>
   </footer> */}
   <Footer website={website}/>
    </>
  )
}

export default Index
