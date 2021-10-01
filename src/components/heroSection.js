import React from "react"
import "../styles/hero.css"

function HeroSection() {
  return (
    <div id="herosection" className="hero">
      <div className="container-fluid">
        <div className="row foss-heading">
          <div className="col-12 col-md-4 col-lg-3 offset-0 offset-lg-1 d-none d-md-block">
            <img src="assets/images/logo.png" alt="Foss Cell GECT logo" />
          </div>
          <div className="col-10 col-md-8 col-lg-8 offset-1 offset-md-0">
            <h1>FOSS CELL</h1>
            <h1>GEC THRISSUR</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
