import React, { useRef, useState } from 'react'
import styles from "styles/signup.module.css"
import Header from '@/my-components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Signup = () => {
    const [is_continued , setIscontinued] = useState(false)
    const [is_password_match , setIs_password_match] = useState(true)

    const username_ref = useRef()
    const email_ref = useRef()
    const password_ref = useRef()
    const confirm_password_ref = useRef()

    const router = useRouter()



    const signup =()=>{
        if (password_ref.current.value == confirm_password_ref.current.value){
           let obj = {"username":username_ref.current.value,"email":email_ref.current.value,"password":password_ref.current.value}
           localStorage.setItem("log_status",true)
           localStorage.setItem("user",JSON.stringify(obj))
           router.push("/member/dashboard")
        } else{
          setIs_password_match(false)
        }
    }

    return (
        <>
        <Header />
            <div className={styles.mainContainer}>

                <div className={styles.container}>
                    <section className={styles.section1}>
                        <div className={styles.login_title}>Signup</div>
                        <section>

                        <input type="text" placeholder="Username" id="username" className={styles.input}  ref={username_ref}/>
                        <input type="text" placeholder="Email addresss" id="email" className={styles.input}  ref={email_ref}/>
                        </section>
                        {(is_continued == true) && (
                        <>
                        <section className={styles.password_container}>
                        <input type="text" placeholder="Password" id={styles.password} className={styles.input}  ref={password_ref}/>
                        <input type="text" placeholder="Re-enter Password" id={styles.password} className={styles.input}  ref={confirm_password_ref}/>
                        {(!is_password_match) && (
                            <>
                            <div className={styles.check_password}>Check your password</div>
                            </>
                        )}
                        </section>
                        </>
                        )}
                        

                        {(is_continued) ? (
                            <>
                            <button className={styles.btn}  onClick={()=>{
                                signup()
                            }}>Submit</button>
                            </>
                        ):(
                            <>
                        <button onclick={()=>{login()}} className={styles.btn} onClick={()=>{
                            if(username_ref.current.value !== "" & email_ref.current.value !== ""){
                                setIscontinued(true)
                                username_ref.current.style.borderColor = "rgba(128, 128, 128, 0.322)"
                                email_ref.current.style.borderColor = "rgba(128, 128, 128, 0.322)"
                            }else{
                                if(username_ref.current.value == ""){
                                    username_ref.current.style.borderColor = "red"
                                }
                                
                                if(email_ref.current.value == ""){
                                    email_ref.current.style.borderColor = "red"
                                }
                                
                            }
                            
                            
                            console.log("continued");
                        }}>Continue</button>
                        </>
                    )}
                     
                    </section>
                    <div className={styles.or}>Or</div>
                    <section className={styles.section2}>
                        <Link href="/auth/login/" className={styles.createAccount}>Already have a account / Login</Link>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Signup
