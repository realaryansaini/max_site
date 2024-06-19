// import React, { useState } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/links.module.css"
import { FiRefreshCcw } from "react-icons/fi";
import { IoHeartOutline ,IoHeartSharp  } from "react-icons/io5";
import Head from 'next/head';

import React, { useRef, useState, useEffect } from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router';

const Favourite_links = () => {
    const [show_sub_manage_links, setShow_sub_manage_links] = useState(false)
    const [show_sub_setting, setShow_sub_setting] = useState(false)
    const [show_new_shorten_link, setShow_new_shorten_link] = useState(false)
    const [show_output_shortend_link, setShow_output_shortend_link] = useState(false)
    const [username, setUsername] = useState()
    const [output_url, setOutput_url] = useState(null)
    // const router = useRouter()
    const router = useRouter()
    const [copybtn_color , setCopybtn_color]  = useState("orange")
  
  
    const [shortend_links, setShortend_links] = useState([])
  
  
    const copy_text_ref = useRef()
    const input_url_ref = useRef()
  
    useEffect(() => {
      let log_status = localStorage.getItem("log_status")
      if (JSON.parse(log_status) == true) {
        let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.liked == true);
        // let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
        setShortend_links(shortend_links1)
        // console.log(shortend_links)
  
      } else {
        router.push("/")
      }

    },[]);
    


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
  
    const change_bg = (id , color)=>{
      document.getElementById(id).style.backgroundColor = color
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
    <Head>
      <title>Favourite Links</title>
    </Head>
    <div className={styles.container}>
    <Sidebar/>

    <div className={styles.section2}>
    <Topbar/>
     
    <div className={styles.all_links_container}>
     <div className={styles.refresh_btn}>
        <span>Favourite Links</span>
        {/* <button onClick={()=>{
            refesh()
        }}><FiRefreshCcw/></button> */}
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
            {(shortend_links.length == 0) ? (
              <>
              <div className={styles.link_section_empty}  onClick={()=>{
                // refesh()
              }}>
                <img src="/empty-folder.png" alt="" />
                <span>Your favourite section is empty</span> </div>
              </>
            ) : (
              <>
              
              {shortend_links.reverse().map((link,index) => (
                <>
                <div className={styles.all_link}>
                  <div className={styles.all_links_title}>
                  {( link.title !== null && link.title !== "") ? <span>{link.title}</span> :  <span>{link.slug}</span> }
                  {(link.liked == false) ? <button onClick={()=>{
                    let updated_links = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.slug !== link.slug);
                    let obj = { "slug": link.slug, "url": link.url , "liked":true ,"date":link.date,"title":link.title}
                    updated_links.push(obj)
                    localStorage.setItem("shortend_links",JSON.stringify(updated_links))
                    setShortend_links(updated_links)
                    console.log(obj);
                  }}><IoHeartOutline/></button> : <button onClick={()=>{
                    let updated_links = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.slug !== link.slug);
                    let obj = { "slug": link.slug, "url": link.url , "liked":false ,"date":link.date ,"title":link.title}
                    updated_links.unshift(obj)
                    localStorage.setItem("shortend_links",JSON.stringify(updated_links))
                    // setShortend_links(updated_links)
                    // console.log(obj);
                    let local_shortend_link = shortend_links.filter((obj)=> obj.slug !== link.slug);
                    setShortend_links(local_shortend_link)
                  }}><IoHeartSharp/></button>}
                  </div>
                  <div className={styles.all_links_input_link}>{link["url"]}</div>
                  <section className={styles.btn_container}>
                    <div className={styles.all_links_output_link}>
                      <input type="text" value={"http://localhost:3000/" + link["slug"]} />
                      <button id={link.slug} onClick={()=>{
                        just_copy("http://localhost:3000/" + link["slug"])
                        // setCopybtn_color("rgb(151, 214, 151)")
                        change_bg(`${link.slug}`,"rgb(151, 214, 151)")

                      }}>copy</button>
                    </div>
                    <div className={styles.edit_del_btn_container}>
                      <button onClick={()=>{
                        router.push("/member/links/edit/"+link.slug)
                      }}>Edit</button>
                      <button onClick={()=>{
                        let updated_links = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.slug !== link.slug);
                        localStorage.setItem("shortend_links",JSON.stringify(updated_links))
                        // setShortend_links(updated_links)
                        let local_shortend_link = shortend_links.filter((obj)=> obj.slug !== link.slug);
                        setShortend_links(local_shortend_link)
                      }}>Delete</button>
                      {/* <button>heart</button> */}
                    </div>
                  </section>
                </div>
                </>
              ))}
              </>
            )}
          </div>


    </div>
    </div>

      
    </>
  )
}

export default Favourite_links
