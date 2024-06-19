import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/change-password.module.css"
import Head from 'next/head';
import { useRouter } from 'next/router';

const Slug = () => {
    const [passord_updated, setPassword_updated] = useState(null)
    const [link_to_edit, setLink_to_edit] = useState(null)

    let website = "#MAX"
    const router = useRouter()
    const {slug} = router.query


    useEffect(() => {

        let shortend_link = JSON.parse(localStorage.getItem("shortend_links")).find((obj)=> obj.slug == slug)
        setLink_to_edit(shortend_link)
        
        
    }, []);
    
    
    const long_url_ref = useRef()
    const title_ref = useRef()
    


    function updateObjectByUrlAndTitle(slug, updatedUrl, updatedTitle) {
        let shortend_links = JSON.parse(localStorage.getItem("shortend_links"))
         let updated_shortend_links = shortend_links.map((item) => {
          if (item.slug == slug) {
            return { ...item, url: updatedUrl, title: updatedTitle };
          }
          return item;
        });

        localStorage.setItem("shortend_links",JSON.stringify(updated_shortend_links))
        console.log(updated_shortend_links);
      }


    return (
        <>
            <Head>
                <title>Edit | {website}</title>
            </Head>
            <div className={styles.container}>
                <Sidebar />

                <div className={styles.section2}>
                    <Topbar />

                    {(passord_updated == true) && (
                        <>
                            <div className={styles.changed_success}>
                                <span>Your link details have been updated successfully !</span>
                            </div>
                        </>
                    )}
                    {(passord_updated == false) && (
                        <>
                            <div className={styles.changed_failed}>
                                <span>Network Error !</span>
                            </div>
                        </>
                    )}

                    {( link_to_edit !== null) && (
                        <>
                    <div className={styles.card}>
                        <section>
                            <div className={styles.label} >Long Url</div>
                            <input type="text" ref={long_url_ref} id={`${link_to_edit.slug}`} onChange={()=>{

                            document.getElementById(`${link_to_edit.slug}`).style.borderColor = "rgba(128, 128, 128, 0)"
                            }} defaultValue={JSON.parse( JSON.stringify(link_to_edit.url))} />
                        </section>
                        <section>
                            <div className={styles.label} >Title</div>
                            <input type="text" ref={title_ref} defaultValue={JSON.parse( JSON.stringify(link_to_edit.title))} />
                        </section>
                        
                        <div>
                            <button onClick={() => {
                                setPassword_updated(null)
                                if (long_url_ref.current.value !== ""){

                                    updateObjectByUrlAndTitle(slug,long_url_ref.current.value,title_ref.current.value)
                                    setTimeout(()=>{
                                        setPassword_updated(true)
                                    },2000)
                                }else{
                                    // document.getElementById(`${link_to_edit.slug}`).style.borderw = "red"
                                    document.getElementById(`${link_to_edit.slug}`).style.borderColor = "red"
                                }
                            }}>Submit</button>
                        </div>
                    </div>
                        </>
                    )}



                </div>
            </div>
        </>
    )
}

export default Slug
