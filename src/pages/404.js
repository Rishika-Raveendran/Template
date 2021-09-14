import React, { useState } from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../styles/iframe.css"

function Error() {
  const [activeMenu, setActiveMenu] = useState(1)

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
      <Seo title="Page not found" />
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

      <div className="bg-dark vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="iframe-div">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%2833%2C37%2C41%2C1%29&t=one-dark&wt=none&l=text%2Fx-csrc&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2523include%253Cstdio.h%253E%250A%250Avoid%2520main%28%29%250A%257B%250A%2520%2520%2520printf%28%2522Error%21%2520Page%2520not%2520found%2522%29%253B%250A%257D"
            style={{
              width: "446px",
              height: "297px",
              border: 0,
              overflow: "hidden",
            }}
            scrolling="no"
            title="404"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Error
