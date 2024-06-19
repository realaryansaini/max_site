// import React, { useState } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/links.module.css"
import { FiRefreshCcw } from "react-icons/fi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Head from 'next/head';

import React, { useRef, useState, useEffect } from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router';

const All_links = () => {
  // const [show_sub_manage_links, setShow_sub_manage_links] = useState(false)
  // const [show_sub_setting, setShow_sub_setting] = useState(false)
  // const [show_new_shorten_link, setShow_new_shorten_link] = useState(false)
  // const [show_output_shortend_link, setShow_output_shortend_link] = useState(false)
  // const [username, setUsername] = useState()
  // const [output_url, setOutput_url] = useState(null)
  // const router = useRouter()
  const router = useRouter()
  const [copybtn_color, setCopybtn_color] = useState("orange")


  const [shortend_links, setShortend_links] = useState([])


  // const copy_text_ref = useRef()
  // const input_url_ref = useRef()

  useEffect(() => {
    let log_status = localStorage.getItem("log_status")
    if (JSON.parse(log_status) == true) {
      let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
      setShortend_links(shortend_links1)

    } else {
      router.push("/")
    }

  }, []);

  const refesh = () => {
    let shortend_links1 = JSON.parse(localStorage.getItem("shortend_links"))
    setShortend_links(shortend_links1)
  }

  const change_bg = (id, color) => {
    document.getElementById(id).style.backgroundColor = color
  }

  const just_copy = (text) => {
    navigator.clipboard.writeText(text);
  }


  const just_liked = (link , liked_value) => {
    let updated_links = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.slug !== link.slug);
    let obj = { "slug": link.slug, "url": link.url, "liked": liked_value, "date": link.date, "title": link.title }
    updated_links.push(obj)
    localStorage.setItem("shortend_links", JSON.stringify(updated_links))
    setShortend_links(updated_links)
    console.log(obj);
  }



  function updateObjectByUrlAndTitle(link, liked_value) {
    let shortend_links = JSON.parse(localStorage.getItem("shortend_links"))
     let updated_shortend_links = shortend_links.map((item) => {
      if (item.slug == link.slug) {
        return { ...item, liked: liked_value};
      }
      return item;
    });

    localStorage.setItem("shortend_links",JSON.stringify(updated_shortend_links))
    setShortend_links(updated_shortend_links)
    console.log(updated_shortend_links);
  }

  return (
    <>

    <Head>
      <title>All Links</title>
    </Head>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.section2}>
          <Topbar />

          <div className={styles.all_links_container}>
            <div className={styles.refresh_btn}>
              <span>All Links</span>
              <button onClick={() => {
                refesh()
              }}><FiRefreshCcw /></button>
            </div>


            {(shortend_links.length == 0) ? (
              <>
                <div className={styles.link_section_empty} onClick={() => {
                  refesh()
                }}>
                  <img src="/empty-folder.png" alt="" />
                  <span>Your link section is empty</span> </div>
              </>
            ) : (
              <>

                {shortend_links.reverse().map((link, index) => (
                  <>
                    <div className={styles.all_link}>

                      <div className={styles.all_links_title}>
                        {(link.title !== null && link.title !== "") ? <span>{link.title}</span> : <span>{link.slug}</span>}
                        {(link.liked == false) ? <button onClick={() => {
                          
                          // just_liked(link , true)
                          updateObjectByUrlAndTitle(link,true)
                        }}><IoHeartOutline /></button> : <button onClick={() => {
                          
                          // just_liked(link,false)
                          updateObjectByUrlAndTitle(link,false)
                        }}><IoHeartSharp /></button>}
                      </div>
                      <div className={styles.all_links_input_link}>{link["url"]}</div>
                      <div className={styles.btn_container}>
                        <div className={styles.all_links_output_link}>
                          <input type="text" value={"http://localhost:3000/" + link["slug"]} />
                          <button id={link.slug} onClick={() => {
                            just_copy("http://localhost:3000/" + link["slug"])
                            // setCopybtn_color("rgb(151, 214, 151)")
                            change_bg(`${link.slug}`, "rgb(151, 214, 151)")
                          }}>copy</button>
                        </div>
                        <div className={styles.edit_del_btn_container}>
                          <button onClick={() => {
                            router.push("/member/links/edit/" + link.slug)
                          }}>Edit</button>
                          <button onClick={() => {
                            let updated_links = JSON.parse(localStorage.getItem("shortend_links")).filter((obj) => obj.slug !== link.slug);
                            localStorage.setItem("shortend_links", JSON.stringify(updated_links))
                            setShortend_links(updated_links)
                          }}>Delete</button>
                        </div>
                      </div>
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

export default All_links
