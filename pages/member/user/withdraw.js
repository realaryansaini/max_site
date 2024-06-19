import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/change-password.module.css"
import Head from 'next/head';
import { useRouter } from 'next/router';

const Withdraw = () => {

    const [total_balance , setTotal_balance]  = useState()

    let website = "#MAX"
    const router = useRouter()
    const {slug} = router.query


    useEffect(() => {

        // let shortend_link = JSON.parse(localStorage.getItem("shortend_links")).find((obj)=> obj.slug == slug)
        // setLink_to_edit(shortend_link)
        let tatal_balance = 2450
        setTotal_balance(tatal_balance)
        
        
    }, []);
    
    
    const account_number_ref = useRef()
    const re_enter_account_number_ref = useRef()
    const ifsc_code_ref = useRef()
    const holder_name_ref = useRef()
    const amount_ref = useRef()
    


    // function updateObjectByUrlAndTitle(slug, updatedUrl, updatedTitle) {
    //     let shortend_links = JSON.parse(localStorage.getItem("shortend_links"))
    //      let updated_shortend_links = shortend_links.map((item) => {
    //       if (item.slug == slug) {
    //         return { ...item, url: updatedUrl, title: updatedTitle };
    //       }
    //       return item;
    //     });

    //     localStorage.setItem("shortend_links",JSON.stringify(updated_shortend_links))
    //     console.log(updated_shortend_links);
    //   }

    const submit =()=>{
        if (account_number_ref.current.value == "" || re_enter_account_number_ref.current.value == "" || ifsc_code_ref.current.value == "" || holder_name_ref.current.value == "" || amount_ref.current.value == ""){
            if(account_number_ref.current.value == ""){
                account_number_ref.current.style.borderColor = "red"
            }
            if(re_enter_account_number_ref.current.value == ""){
                re_enter_account_number_ref.current.style.borderColor = "red"
            }
            if(ifsc_code_ref.current.value == ""){
                ifsc_code_ref.current.style.borderColor = "red"
            }
            if(holder_name_ref.current.value == ""){
                holder_name_ref.current.style.borderColor = "red"
            }
            if(amount_ref.current.value == ""){
                amount_ref.current.style.borderColor = "red"
            }
        }else if( account_number_ref.current.value == re_enter_account_number_ref.current.value){
            if(amount_ref.current.value <= total_balance){
                account_number_ref.current.value = ""
                re_enter_account_number_ref.current.value = ""
                ifsc_code_ref.current.value = ""
                holder_name_ref.current.value = ""
                amount_ref.current.value = ""
                alert("your withdraw request for "+amount_ref.current.value+" dollar is submited successfully")
            }else{

                amount_ref.current.style.borderColor = "red"
            }
       }else{
        re_enter_account_number_ref.current.style.borderColor = "red"
       }
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

                    

                   
                    <div className={styles.card}>
                        <section>
                            <div className={styles.label} >Account Number</div>
                            <input type="text" ref={account_number_ref} onChange={()=>{
                                account_number_ref.current.style.borderColor = "rgba(128, 128, 128, 0)"
                            }} />
                        </section>
                        <section>
                            <div className={styles.label} >Re-enter Account Number</div>
                            <input type="text" ref={re_enter_account_number_ref} onChange={()=>{
                                re_enter_account_number_ref.current.style.borderColor = "rgba(128, 128, 128, 0)"
                            }}/>
                        </section>
                        <section>
                            <div className={styles.label} >IFSC Code</div>
                            <input type="text" ref={ifsc_code_ref} onChange={()=>{
                                ifsc_code_ref.current.style.borderColor = "rgba(128, 128, 128, 0)"
                            }}/>
                        </section>
                        <section>
                            <div className={styles.label} >Account Holder Name</div>
                            <input type="text" ref={holder_name_ref} onChange={()=>{
                                holder_name_ref.current.style.borderColor = "rgba(128, 128, 128, 0)"
                            }}/>
                        </section>
                        <section>
                            <div className={styles.label} >Amount - in Rupees</div>
                            <input type="text" ref={amount_ref} onChange={()=>{
                                amount_ref.current.style.borderColor = "rgba(128, 128, 128, 0)"
                            }}/>
                        </section>
                        
                        <div>
                            <button onClick={() => {
                            //    if(amount_ref.current.value < total_balance){

                            //    }else{
                            //     amount_ref.current.style.borderColor = "red"
                            //    }
                            submit()
                            }}>Submit</button>
                        </div>
                    </div>
                  



                </div>
            </div>
        </>
    )
}

export default Withdraw
