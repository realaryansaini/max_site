import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '@/my-components/sidebar'
import Topbar from '@/my-components/topbar'
import styles from "styles/member/change-password.module.css"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Change_password from '../settings/change_email';

const Change_password = () => {
    const [referrals, setRefferals] = useState([])
    const [passord_updated, setPassword_updated] = useState(null)
    let link = "http://localhost:3000/ref/"
    let username = "realaryansaini"
    let website = "#MAX"
    // let referrals = []


    useEffect(() => {

        let referrals1 = [{ "username": "vipinsaini", "date": "22/04/2024" }, { "username": "aradhanasaini", "date": "22/04/2024" }]
        setRefferals(referrals1)

    }, []);


    const current_password_ref = useRef()
    const new_password_ref = useRef()
    const confirm_password_ref = useRef()
    const router = useRouter()

    const submit = () => {
        let user = JSON.parse(localStorage.getItem("user"))
        setPassword_updated(null)
        if (user !== null) {
            // console.log(user.password);
            // console.log(current_password_ref.current.value);
            if (current_password_ref.current.value == user.password && new_password_ref.current.value == confirm_password_ref.current.value) {
                // if(){}
                // alert("your password updated and your new passord is "+new_password_ref.current.value)
                localStorage.setItem("user", JSON.stringify({ "username": user.username, "email": user.email, "password": new_password_ref.current.value }))
                setTimeout(() => {
                    setPassword_updated(true)
                    current_password_ref.current.value = ""
                    new_password_ref.current.value = ""
                    confirm_password_ref.current.value = ""
                }, 2000)
                // setTimeout(()=>{
                //     router.push("/member/dashboard")
                
                // },4000)
            } else {
                setTimeout(() => {
                    setPassword_updated(false)
                },2000)

                // alert("invalid credentials")
            }
        }
    }
    return (
        <>
            <Head>
                <title>Change Password | {website}</title>
            </Head>
            <div className={styles.container}>
                <Sidebar />

                <div className={styles.section2}>
                    <Topbar />

                    {(passord_updated == true) && (
                        <>
                            <div className={styles.changed_success}>
                                <span>Your password have been changed successfully !</span>
                            </div>
                        </>
                    )}
                    {(passord_updated == false) && (
                        <>
                            <div className={styles.changed_failed}>
                                <span>Invalid Credentials !</span>
                            </div>
                        </>
                    )}


                    <div className={styles.card}>
                        <section>
                            <div className={styles.label} >Current Password</div>
                            {/* <input type="text" placeholder='Current Password'/> */}
                            <input type="text" ref={current_password_ref} />
                        </section>
                        <section>
                            <div className={styles.label} >New Password</div>
                            {/* <input type="text" placeholder='New Password'/> */}
                            <input type="text" ref={new_password_ref} />
                        </section>
                        <section>
                            <div className={styles.label} >Re-enter New Password</div>
                            {/* <input type="text" placeholder='Re-enter New Password'/> */}
                            <input type="text" ref={confirm_password_ref} />
                        </section>
                        <div>
                            <button onClick={() => { submit() }}>Submit</button>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Change_password
