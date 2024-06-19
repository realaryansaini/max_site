import React, { useState , useEffect} from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/referrals.module.css"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Head from 'next/head';

const Referrals = () => {
    const [referrals,setRefferals] = useState([])
    let link = "http://localhost:3000/ref/"
    let username = "realaryansaini"
    let website = "#MAX"
    // let referrals = []
    
    
    useEffect(() => {
        
        let referrals1 = [{ "username": "vipinsaini", "date": "22/04/2024" }, { "username": "aradhanasaini", "date": "22/04/2024" }]
        setRefferals(referrals1)
        
      }, []);
    return (
        <>
        <Head>
            <title>Referrals | {website}</title>
        </Head>
            <div className={styles.container}>
                <Sidebar />

                <div className={styles.section2}>
                    <Topbar />

                    <div className={styles.card}>
                        <p>The {website} referral program is a great way to spread the word of this great service and to earn even more money with your short links! Refer friends and receive 5% of their earnings for life!</p>
                        <div className={styles.input_container}>

                            <input type="text" value={link + username} />
                            {/* <button>Copy</button> */}
                        </div>
                    </div>

                    <div className={styles.referrals_container}>
                        <div className={styles.my_refferals_title}> <FaArrowRightArrowLeft /> My Referrals</div>
                        {(referrals.length == 0) ? (
                            <>
                                <div className={styles.not_refered_anyone}>
                                    <img src="/refer.jpg" alt="" />
                                    <span>you have not refered anyone yet !</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.tables}>

                                    <table>
                                        <tr>
                                            <th>Username</th>
                                            <th>Date</th>
                                        </tr>
                                        {referrals.map((refer) => (
                                            <>
                                                <tr>
                                                    <td>{refer.username}</td>
                                                    <td>{refer.date}</td>
                                                </tr>

                                            </>
                                        ))}
                                    </table>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Referrals
