import React, { useRef, useState, useEffect } from 'react'
import styles from "styles/components/sidebar.module.css"
import { MdSpeed, MdPayment, MdAdd } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { BsThreeDotsVertical, BsGraphUpArrow } from "react-icons/bs";
import { RiMenuLine, RiLogoutBoxLine } from "react-icons/ri";
// import { RiLogoutBoxLine } from "react-icons/ri";
import { FaRegCircleUser, FaTelegram } from "react-icons/fa6";
// import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [show_sub_manage_links, setShow_sub_manage_links] = useState(false)
  const [show_sub_setting, setShow_sub_setting] = useState(false)
  const [show_new_shorten_link, setShow_new_shorten_link] = useState(false)
  const [show_output_shortend_link, setShow_output_shortend_link] = useState(false)
  const [username, setUsername] = useState()
  const [output_url, setOutput_url] = useState(null)
  const [count, setCount] = useState(0);
  const router = useRouter()
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    let log_status = localStorage.getItem("log_status")
    if (JSON.parse(log_status) == true) {
      // setLogStatus(true)
      let username = JSON.parse(localStorage.getItem("user")).username
      setUsername(username)

    } else {
      router.push("/")
    }
  }, [count, router]);

  let website = "# MAX"
  let bot_username = "this_is_the_bot_name"



  // console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // months are zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const copy_text_ref = useRef()
  const input_url_ref = useRef()

  const just_copy = (text) => {
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(text);
    // alert("Copied the text: " + copy_text_ref.current.value);
  }



  const saveShortendLinkToLoc = (url) => {
    let shortend_links = localStorage.getItem("shortend_links")
    const uuid = crypto.randomUUID();
    let slug = uuid.slice(0, 5)
    // let slug = "sdjhfksdhf"
    if (shortend_links !== null) {
      let updated_shortend_links = JSON.parse(shortend_links)
      updated_shortend_links.push({ "slug": slug, "url": url })
      localStorage.setItem("shortend_links", JSON.stringify(updated_shortend_links))
      console.log(updated_shortend_links);
    } else {
      let obj = { "slug": slug, "url": url }
      localStorage.setItem("shortend_links", JSON.stringify([obj]))
      console.log(obj);
    }
    setOutput_url("http://localhost:3000/" + slug)
  }

  return (
    <>
      <div className={styles.section1}>
        {/* this is section one */}
        <div className={styles.logo}><Link href="/" className={styles.anchor}> {website}</Link></div>
        <div className={styles.profile}>
          <img src="/dashboard_profile.png" alt="" />
          <div className={styles.username}>{username}</div>
        </div>
        <section className={styles.side_links}>
          <Link href="/member/dashboard" className={styles.anchor}><div className={styles.side_element}><MdSpeed /> Dashboard</div></Link>
          <button className={styles.side_element} onClick={() => {
            // document.querySelector(".sub_manage_links").style.display = "flex"
            if (show_sub_manage_links) {
              setShow_sub_manage_links(false)
            } else {

              setShow_sub_manage_links(true)
            }
            // console.log("ckicke");
          }}><IoIosLink /> Manage Links</button>
          {(show_sub_manage_links) && (
            <>
              <Link href="/member/links" className={styles.anchor}><div className={`${styles.side_element} ${styles.sub_manage_links}`}>
                All Links
              </div></Link>
              <Link href="/member/favourite_links" className={styles.anchor}><div className={`${styles.side_element} ${styles.sub_manage_links}`}>
                Favourite Links
              </div></Link >
            </>
          )}

          <Link href="/member/payments" className={styles.anchor}><div className={styles.side_element}><MdPayment />Payments</div></Link>
          {/* <div className={styles.side_element}><VscTools/> Tools</div> */}
          <Link href="/member/referrals" className={styles.anchor}> <div className={styles.side_element}><FiUsers />
         Refferals</div></Link>
          <button className={styles.side_element} onClick={() => {
            if (show_sub_setting) {
              setShow_sub_setting(false)
            } else {

              setShow_sub_setting(true)
            }
          }}><IoSettingsOutline /> Settings</button>
          {(show_sub_setting) && (
            <>
              {/* <div className={`${styles.side_element} ${styles.sub_manage_links}`}>Profile</div> */}
              <Link href="/member/user/change-password" className={styles.anchor}><div className={`${styles.side_element} ${styles.sub_manage_links}`}>Change Password</div></Link>
              <Link href="/member/user/change-email" className={styles.anchor}><div className={`${styles.side_element} ${styles.sub_manage_links}`}>Change Email</div></Link>
            </>
          )}
          {/* <div className={styles.side_element}><SlSupport /> Support</div> */}
          <button className={styles.side_element} onClick={() => {
            localStorage.setItem("log_status", false)
            router.push("/")
          }}><RiLogoutBoxLine /> Logout</button>
        </section>
      </div>
    </>
  )
}

export default Sidebar
