import React, { useRef, useState } from 'react'
import styles from "styles/login.module.css"
import Header from '@/my-components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useRef } from 'react'

const Login = () => {
    const [invalid_credentials,setInvalid_credentials] = useState(false)
    let username_or_email_ref = useRef()
    let password_ref = useRef()
    const router = useRouter()

    const login = () => {
        setInvalid_credentials(false)
        setTimeout(()=>{
            let user = JSON.parse(localStorage.getItem("user"))
            if (user !== null) {
                if (username_or_email_ref.current.value == user.username && password_ref.current.value == user.password) {
                    localStorage.setItem("log_status", true)
                    router.push("/member/dashboard")
                } else if (username_or_email_ref.current.value == user.email && password_ref.current.value == user.password) {
                    localStorage.setItem("log_status", true)
                    router.push("/member/dashboard")
    
    
                } else {
                    // alert("Invalid username or password")
                    setInvalid_credentials(true)
                }
            }
        },2000)
    }
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>

                <div className={styles.container}>
                    <section className={styles.section1}>
                        <div className={styles.login_title}>Login</div>
                        <input type="text" ref={username_or_email_ref} placeholder="Username or email addresss" id="email" className={styles.input} />
                        <section className={styles.password_container}>
                            <div>

                            <input type="text" ref={password_ref} placeholder="Password" id={styles.password} className={styles.input} />
                            {(invalid_credentials == true) && <div className={styles.invalid_credentials}>invalid credentials</div>}
                            </div>
                            {/* <section>Invalid username or password</section> */}
                            <div className={styles.forget_rememder_container}>
                                <div className={styles.rememder_me}> <input type="checkbox" /> <span>Remember Me</span></div>
                                <div className={styles.forget_password}><Link className={styles.anchor} href="/auth/forget"> Forget Passoword</Link></div>
                            </div>
                        </section>
                        <button onClick={() => { login() }} className={styles.btn}>Login</button>
                    </section>
                    <div className={styles.or}>Or</div>
                    <section className={styles.section2}>
                        <Link href="/auth/signup/" className={styles.createAccount}>Create a New Account</Link>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Login
