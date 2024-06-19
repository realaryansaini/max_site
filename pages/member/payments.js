import React, { useRef, useState, useEffect } from 'react'
import styles from "styles/member/payments.module.css"
import { MdSpeed, MdPayment, MdAdd } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { BsThreeDotsVertical, BsGraphUpArrow } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { FaRegCircleUser, FaTelegram } from "react-icons/fa6";
import Head from 'next/head';
// import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';

import Sidebar from '@/my-components/sidebar';
import Topbar from '@/my-components/topbar';
import { useRouter } from 'next/router';

const Payments = () => {
    const [show_sub_manage_links, setShow_sub_manage_links] = useState(false)
    const [show_sub_setting, setShow_sub_setting] = useState(false)
    const [show_new_shorten_link, setShow_new_shorten_link] = useState(false)
    const [show_output_shortend_link, setShow_output_shortend_link] = useState(false)
    const [user_payments_detail, setUser_payments_detail] = useState(null)
    const [dollar_to_rupees, SetDollar_to_rupees] = useState(null)
    let website = "# MAX"
    let bot_username = "this_is_the_bot_name"


    const copy_text_ref = useRef()
    const input_url_ref = useRef()
    const router = useRouter()

    const saveShortendLinkToLoc = (url) => {
        let shortend_links = localStorage.getItem("shortend_links")
        const uuid = crypto.randomUUID();
        let slug = uuid.slice(0, 5)
        // let slug = "sdjhfksdhf"
        if (shortend_links !== null) {
            updated_shortend_links = JSON.parse(shortend_links)
            updated_shortend_links.push({ "slug": slug, "url": url })
            localStorage.setItem("shortend_links", JSON.stringify(updated_shortend_links))
        } else {
            let obj = { "slug": slug, "url": url }
            localStorage.setItem("shortend_links", JSON.stringify([obj]))
        }
    }


    useEffect(()=>{
        
        let user_payments_detail = {"total":25,"pending":10.45,"withdrawn":40.67}
        let dollar_to_rupees = 80
        setUser_payments_detail(user_payments_detail)
        SetDollar_to_rupees(dollar_to_rupees)

    },[])
    return (
        <>
            <Head>
                <title>Payments | {website}</title>
            </Head>

            <div className={styles.container}>
        <Sidebar/>



        <div className={styles.section2}>
          <Topbar/>
                   {(user_payments_detail !== null && user_payments_detail !== false) ? (
                    <>
                    
                    <div className={styles.withdraw_cards_container}>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/wallet.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Availabe Balance</div>
                                <div className={styles.withdraw_balance}>$<span>{user_payments_detail.total}</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>{Math.floor(user_payments_detail.total*dollar_to_rupees)}</span></div>
                            </div>
                        </div>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/pending.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Pending Withdrawn</div>
                                <div className={styles.withdraw_balance}>$<span>{user_payments_detail.pending}</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>{Math.floor(user_payments_detail.pending*dollar_to_rupees)}</span></div>
                            </div>
                        </div>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/salary.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Total Withdrawn</div>
                                <div className={styles.withdraw_balance}>$<span>{user_payments_detail.withdrawn}</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>{Math.floor(user_payments_detail.withdrawn*dollar_to_rupees)}</span></div>
                            </div>
                        </div>
                    </div>
                    </>
                   ):(
                    <>
                    <div className={styles.withdraw_cards_container}>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/wallet.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Availabe Balance</div>
                                <div className={styles.withdraw_balance}>$<span>0.00</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>0.00</span></div>
                            </div>
                        </div>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/pending.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Pending Withdrawn</div>
                                <div className={styles.withdraw_balance}>$<span>0.00</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>0.00</span></div>
                            </div>
                        </div>
                        <div className={styles.withdraw_card}>
                            <div className={styles.withdraw_card_logo}><img src="/salary.png" alt="" /></div>
                            <div className={styles.withdraw_details}>
                                <div className={styles.withdraw_card_title}>Total Withdrawn</div>
                                <div className={styles.withdraw_balance}>$<span>0.00</span></div>
                                <div className={styles.withdraw_estimated_price}>Estimated - ₹<span>0.00</span></div>
                            </div>
                        </div>
                    </div>
                    
                    </>
                   )}


                    <div className={styles.withdraw_section}>
                        <div className={styles.withdraw_btn}><button onClick={()=>{
                            if(user_payments_detail.total >=  20){
                                router.push("/member/user/withdraw")
                            }else{
                                alert("Your minimum earning should be 20 dollars")
                            }
                        }}>Withdraw</button></div>
                        <div className={styles.withdraw_notice}>
                            <div className={styles.notice}>
                                <p>
                                    When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 1 days after requesting. Please do not contact us regarding payments before due dates.
                                </p>
                                <p>
                                    In order to receive your payments you need to fill your payment method and payment ID <a href="">here</a> if you have not done so. You are also requested to fill all the required fields in the Account Details section with accurate data.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default Payments
