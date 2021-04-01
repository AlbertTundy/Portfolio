import React, { useState } from "react";
import "../App.css";
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form";


const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, errors}= useForm();

    const serviceID ="service_ID"
    const templateID = "template_ID"
    const userID = "user_43jMyjR3xzEJiZ9sR5iBw"

    const onSubmit= (data,r)=> {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID 
        )
        r.target.reset();
    }
    
    const sendEmail=(serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
          setSuccessMessage("Form sent successfully.");
      }).catch(err=> console.error(`something went wrong${err}`))
  }     

    return (

        <div className="Contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill the form and describe your project and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit ={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                       {/* NAME INPUT */} 
                       <input
                       type="text"
                       className="form-control"
                       placeholder="Name"
                       name="Name"
                       ref={
                    register({
                      required: "Please enter your name",
                      maxLength: {
                        value: 30,
                        message: "Please enter a name with fewer than 30 characters"
                      }
                    })
                  }
                       />
                       <div className="line"></div>
                       <span className="error-message">
                        {errors.name && errors.name.message}
                    </span>
                       {/* PHONE INPUT */} 
                       <input
                        className="form-control"
                        placeholder="Phone number"
                        name="phone"
                       />
                       <div className="line"></div>
                       {/* EMAIL INPUT */}
                       <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                       />
                       <div className="line"></div>
                       {/* SUBJECT INPUT */}
                       <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                       />
                       <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* SUBJECT INPUT */}
                       <textarea
                        type="text"
                        className="form-control"
                        placeholder="What can I do for you?"
                        name="email"
                       ></textarea>
                       <div className="line"></div>
                       <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>

    )    
}
    
export default Contact