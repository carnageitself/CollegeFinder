import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
   <div className="home">
    <Navbar/>
    <Hero/>
    <Footer/>
   </div>
  )
}
