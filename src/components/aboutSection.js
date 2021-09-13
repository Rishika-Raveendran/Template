import React from 'react'
import '../styles/about.css'

function AboutSection() {
    return (
        <div id="aboutsection" className="about">
            <div className="container-fluid">
                <div className="row who-are-we">
                    <div className="col-10 col-md-8 offset-1 offset-md-2 text">
                       <div> <h1>
                            Who are we? 
                        </h1>
                            <p>FOSS Cell GEC Thrissur is a student community based in Government Engineering College Thrissur focused on contributing to Free and Open Source Software and mentoring students to achieve excellence in various fields of Computer Science.</p>
                            <p>We envision students to excel and become the leaders of tomorrow by imbibing valuable skills relevant in the 21st century which include technical but also creative and intrapersonal skills enabling students to collaborate, exchange ideas, work together and solve real-life problems.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="row quote">
                    <div className="col-10  offset-1  text">
                       <div> <h1>
                          " Open source is a development methodology, free software is a social movement"
                        </h1>
                        </div>
                    </div>
                    
                </div>
                <div className="row continue">
                    <div className="col-10 col-md-8 offset-1 offset-md-2  text">
                       <div> 
                            <p>FOSS Cell GEC Thrissur is a student community based in Government Engineering College Thrissur focused on contributing to Free and Open Source Software and mentoring students to achieve excellence in various fields of Computer Science.</p>
                            <p>We envision students to excel and become the leaders of tomorrow by imbibing valuable skills relevant in the 21st century which include technical but also creative and intrapersonal skills enabling students to collaborate, exchange ideas, work together and solve real-life problems.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-4 offset-1 d-none d-md-block">
                       <img src="assets/images/logowname.png" className="pcimg" alt="Laptop"></img> 
                    </div> */}
                </div>
                
            </div>
            
        </div>
    )
}

export default AboutSection
