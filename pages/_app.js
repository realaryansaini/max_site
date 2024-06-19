import "styles/globals.css"
import Footer from "@/my-components/footer"

export default function App({ Component, pageProps }) {
    return (
    <>
    {/* <div className="containers"> */}
    <Component {...pageProps} />
    {/* </div> */}
    {/* <Footer /> */}
    </>
  )}