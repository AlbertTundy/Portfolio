import React from "react"
import picture from "./images/picture.jpg"
import resume from "../files/resume.pdf"

const Home = () => {
    return (
        <div className="project">
         <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="aboutMePic" src={picture} alt="laptop selfi"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Stephen. I'm currently a student at DU working my way through their full stack web development program. I'm excited to earn my certificate and get out into the work force!

            Right now I've only created 3 custom projects but they have a lot to them considering my limited experience. 

            I'm currently in looking for a job to get started if you have any projects feel free to reach out! 

            
          </p>
        </div>
      </div>
    </div>
  </div>)
}
export default Home