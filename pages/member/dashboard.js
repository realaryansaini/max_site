import React, { useRef, useState, useEffect } from 'react'
import styles from "styles/member/dashboard.module.css"
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
import Head from 'next/head';
import Sidebar from '@/my-components/sidebar';
import Topbar from '@/my-components/topbar';

const Dashboard = () => {
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
      <Head>
        <title>Dashboard | {website}</title>
      </Head>
      <div className={styles.container}>
        <Sidebar />



        <div className={styles.section2}>
          <Topbar />

          <div className={styles.today_report}>
            <div className={styles.today_report_title}>Today&apos;s report -  {day} {months[month - 1]}  {hours}:{minutes}:05</div>
            <div className={styles.report_cards}>


              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Views</div>
                  <div className={styles.card_value}>0</div>
                </section>
                <div className={styles.card_logo_container}>
                  {/* <BsGraphUpArrow className={styles.card_logo}/> */}
                  <img src="/bar-chart.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Earning</div>
                  <div className={styles.card_value}>$0.00</div>
                </section>
                <div className={styles.card_logo_container}>
                  {/* <BsGraphUpArrow className={styles.card_logo}/> */}
                  <img src="/salary.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Ref Earning</div>
                  <div className={styles.card_value}>$0.00</div>
                </section>
                <div className={styles.card_logo_container}>
                  {/* <BsGraphUpArrow className={styles.card_logo}/> */}
                  <img src="/wallet.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Avg CPM</div>
                  <div className={styles.card_value}>0</div>
                </section>
                <div className={styles.card_logo_container}>
                  {/* <BsGraphUpArrow className={styles.card_logo}/> */}
                  <img src="/percentage.png" alt="" className={styles.card_logo} />
                </div>
              </div>


            </div>
          </div>
          <div className={styles.today_report}>
            <div className={styles.today_report_title}>This month&apos;s report - {months[month - 1]}  {year}</div>
            <div className={styles.report_cards}>


              <div className={styles.card}>
                <section>

                  <div className={styles.card_title}>Views</div>
                  <div className={styles.card_value}>0</div>
                </section>
                <div className={styles.card_logo_container}>
                  <img src="/bar-chart.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Earning</div>
                  <div className={styles.card_value}>$0.00</div>
                </section>
                <div className={styles.card_logo_container}>
                  <img src="/salary.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Ref Earning</div>
                  <div className={styles.card_value}>$0.00</div>
                </section>
                <div className={styles.card_logo_container}>
                  <img src="/wallet.png" alt="" className={styles.card_logo} />
                </div>
              </div>

              <div className={styles.card}>
                <section>
                  <div className={styles.card_title}>Avg CPM</div>
                  <div className={styles.card_value}>0</div>
                </section>
                <div className={styles.card_logo_container}>
                  <img src="/percentage.png" alt="" className={styles.card_logo} />
                </div>
              </div>


            </div>
          </div>



        </div>



      </div>
    </>
  )
}

export default Dashboard
