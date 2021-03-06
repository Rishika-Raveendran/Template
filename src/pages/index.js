import React, { useEffect, useState } from "react"
import HeroSection from "../components/heroSection"
import AboutSection from "../components/aboutSection"
import TeamSection from "../components/teamSection"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import { Link } from "gatsby"
import "../styles/index.css"
import Seo from "../components/seo"

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(1)

  useEffect(() => {
    let url = window.location.hash
    const hashpaths = ["#aboutsection", "#execomsection"]
    setActiveMenu(hashpaths.indexOf(url) + 2)
  }, [])

  const toggleNav = index => {
    setActiveMenu(index)
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
      <Seo title="" />
      <button className="btn icon d-block d-md-none" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </button>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="navBrand">
          <img
            src="assets/images/logo.png"
            width="65rem"
            alt="Foss GECT logo"
          />
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

        <Link
          to="/#aboutsection"
          className={activeMenu === 2 ? "menu active" : "menu"}
          onClick={() => {
            toggleNav(2)
          }}
        >
          ABOUT
        </Link>
        <Link
          to="/#execomsection"
          className={activeMenu === 3 ? "menu active" : "menu"}
          onClick={() => {
            toggleNav(3)
          }}
        >
          EXECOM
        </Link>
      </div>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </>
  )
}
