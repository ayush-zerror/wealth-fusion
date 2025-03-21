import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll />
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
