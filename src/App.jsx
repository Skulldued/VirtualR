import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Flow from "./components/Flow";
import Pricecard from "./components/Pricecard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function App() {
  return (
   <>
   <Navbar/>
  <div className="max-w-7xl mx-auto pt-20 px-6">
  <Hero/>
  <Features/>
  <Flow/>
  <Pricecard/>
  <Testimonial/>
  <Footer/>
  </div>
   </>
  )
}