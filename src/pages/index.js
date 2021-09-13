import React, { useState }  from "react"
import HeroSection from "../components/heroSection"
import AboutSection from "../components/aboutSection"
import TeamSection from "../components/teamSection"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.min.css"
import { Link } from "gatsby"
import '../styles/index.css'


export default function Home() {
  const [activeMenu, setactiveMenu] = useState(1)

  const toggleNav = index => {
    setactiveMenu(index)
  }

  const myFunction = () => {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive"
    } else {
      x.className = "topnav"
    }
  }
  return (
    <>
      <button className=" btn icon d-block d-md-none" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </button>
       <div className="topnav" id="myTopnav">
        <Link to="/" className="navBrand">
          <img src="assets/images/logo.png" width="65rem"  alt="Foss GECT logo"></img>
        </Link>

        <Link
          to="/"
          className={activeMenu === 1 ? "menu active" : "menu"}
          onClick={() => {
            toggleNav(1)
          }}
        >
          HOME
        </Link>

        <Link to="#aboutsection" className={activeMenu === 2 ? "menu active" : "menu"}
          onClick={() => {
            toggleNav(2)
          }}>ABOUT</Link>
        <Link to="#execomsection" className={activeMenu === 3 ? "menu active" : "menu"}
          onClick={() => {
            toggleNav(3)
          }}>EXECOM</Link>
        
      </div>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Footer/>
      </>
  )
}
