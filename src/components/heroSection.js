import React from "react"
import "../styles/hero.css"

function HeroSection() {
 
  return (
    <div id="herosection" className="hero">
     
      <div className="container-fluid">
        <div className="row foss-heading">
          <div className="col-12 col-md-6 col-lg-3 offset-0  offset-lg-2 d-none d-md-block ">
            <img src="assets/images/logo.png" alt="Foss Cell GECT logo"></img>
          </div>
          <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-7 ">
            <h1>
              FOSS CELL</h1><h1>GEC THRISSUR
            </h1>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection
