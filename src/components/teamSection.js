import React from 'react'
import '../styles/team.css'

function TeamSection() {
    const members = [
        {
            name: "Ajay Ram",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Chair"
            
        },
        {
            name: "Aparna",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Vice Chair"
            
        },
        {
            name: "Abrar",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Vice Chair"
            
        },
        {
            name: "Hashir P M",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Secretary"
            
        },
        {
            name: "Rishika Raveendran",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Joint Secretary"
            
        },
        {
            name: "Maria Viji George",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Joint Secretary"
            
        },
        {
            name: "Shuaib",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Treasurer"
            
        },
        {
            name: "Anirudh",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Treasurer"
            
        },
        {
            name: "Sooraj",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"App Dev Lead"
            
        },
        {
            name: "Bichu",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Web Dev Lead"
            
        },
        {
            name: "Navaneeth D",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Data Science Lead"
            
        },
        {
            name: "Krishnanad",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Blockchain Lead"
            
        },
        {
            name: "Ajay Ram",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Cybersecurity Lead"
            
        },
        {
            name: "Jishnu",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Robotics and IOT Lead"
            
        },
        {
            name: "Vinayak",
            imageUrl: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            position:"Open Hardware Lead"
            
        },
    ]
    return (
        <div id="execomsection">
             <section class="team text-center py-5 bg-dark">
   <div className="container">
     <div className="header my-5 text-light">
       <h1>Meet our Team </h1>
       <p className="text-muted ">Meet and Greet our Team Members</p>
     </div>
     <div className="row">
                        {members.map((member,index) => (
                            <div key={index} className={(index===0||index===5||index===10||index===15)?"col-10 col-md-4 col-lg-2 offset-1":"col-10 col-md-4 col-lg-2 offset-1 offset-md-0 "}>
         <div className="img-block mb-5">
           <img src={member.imageUrl} className="img-fluid  img-thumbnail rounded-circle member-image" alt="image1"/>
           <div className="content mt-2 text-light">
             <h4>{member.name}</h4>
             <p className="text-muted">{member.position}</p>
           </div>
         </div>
       </div>))}
       {/* <div class="col-md-6 col-lg-3 ">
         <div class="img-block mb-5">
           <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1"/>
           <div class="content mt-2">
             <h4>Syndia Lee</h4>
             <p class="text-muted">Software Engineer</p>
           </div>
         </div>
       </div> */}
       {/* <div class="col-md-6 col-lg-3">
         <div class="img-block mb-5">
           <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1"/>
           <div class="content mt-2">
             <h4>Noel Flantier</h4>
             <p class="text-muted">Joomla Specialist</p>
           </div>
         </div>
       </div> */}
       {/* <div class="col-md-6 col-lg-3">
         <div class="img-block mb-5">
           <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1"/>
           <div class="content mt-2">
             <h4>Bobby Doe</h4>
             <p class="text-muted">Street Artist</p>
           </div>
         </div>
       </div> */}
     </div>
   </div>
 </section>
        </div>
    );
}

export default TeamSection

