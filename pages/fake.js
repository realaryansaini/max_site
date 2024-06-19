// import React, { useState } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/dashboard.module.css"
import { FiRefreshCcw } from "react-icons/fi";


import React, { useRef, useState, useEffect } from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router';

const Fake = () => {
    const [show_sub_manage_links, setShow_sub_manage_links] = useState(false)
    const [show_sub_setting, setShow_sub_setting] = useState(false)
    const [show_new_shorten_link, setShow_new_shorten_link] = useState(false)
    const [show_output_shortend_link, setShow_output_shortend_link] = useState(false)
    const [username, setUsername] = useState()
    const [output_url, setOutput_url] = useState(null)
    // const router = useRouter()
    const router = useRouter()
  
  
    const [shortend_links, setShortend_links] = useState([])
  
  
    const copy_text_ref = useRef()
    const input_url_ref = useRef()
  
    useEffect(() => {
      let log_status = localStorage.getItem("log_status")
      if (JSON.parse(log_status) == true) {
        let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
        setShortend_links(shortend_links1)
        // console.log(shortend_links)
  
      } else {
        router.push("/")
      }

    },[]);
    
    const refesh = ()=>{

        // if(router.query && router.query.id == "3212"){
          let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
          setShortend_links(shortend_links1)
        // 
    }

    // ckeck()
    // if(router.query && router.query.id === "3212"){
    //     //   console.log("id is " + router.query.id)
    //       let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
    //       setShortend_links(shortend_links1)
    // }else{
    //     console.log(router.query.id);
    // }
  
  
  
    const just_copy = (text) => {
      // copyText.select();
      // copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(text);
      // alert("Copied the text: " + copy_text_ref.current.value);
    }
  
    
  
    // const saveShortendLinkToLoc = (url) => {
    //   let shortend_links = localStorage.getItem("shortend_links")
    //   const uuid = crypto.randomUUID();
    //   let slug = uuid.slice(0, 5)
    //   if (shortend_links !== null) {
    //     let updated_shortend_links = JSON.parse(shortend_links)
    //     updated_shortend_links.push({ "slug": slug, "url": url })
    //     localStorage.setItem("shortend_links", JSON.stringify(updated_shortend_links))
    //     console.log(updated_shortend_links);
    //   } else {
    //     let obj = { "slug": slug, "url": url }
    //     localStorage.setItem("shortend_links", JSON.stringify([obj]))
    //     console.log(obj);
    //   }
    //   setOutput_url("http://localhost:3000/"+slug)
    // }
  return (
    <>
    <div className={styles.container}>
    <Sidebar/>

    <div className={styles.section2}>
    <Topbar/>
     
    <div className={styles.all_links_container}>
     <div className={styles.refresh_btn}>
        <button onClick={()=>{
            refesh()
        }}><FiRefreshCcw/></button>
     </div>
        
            {/* <div className={styles.all_link}>
              <div className={styles.all_links_title}>{shortend_links[1].url}</div>
              <div className={styles.all_links_input_link}>https://mdisk.me/fsdlfsdhfkhs</div>
              <section className={styles.btn_container}>
                <div className={styles.all_links_output_link}>
                  <input type="text" />
                  <button>copy</button>
                </div>
                <div className={styles.edit_del_btn_container}>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </section>
            </div> */}

            {shortend_links.reverse().map((link,index) => (
              <>
              <div className={styles.all_link}>
                <div className={styles.all_links_title}>{link.slug}</div>
                <div className={styles.all_links_input_link}>{link["url"]}</div>
                <section className={styles.btn_container}>
                  <div className={styles.all_links_output_link}>
                    <input type="text" value={"http://localhost:3000/" + link["slug"]} />
                    <button>copy</button>
                  </div>
                  <div className={styles.edit_del_btn_container}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </section>
              </div>
              </>
            ))}
          </div>


    </div>
    </div>

      
    </>
  )
}

export default Fake
