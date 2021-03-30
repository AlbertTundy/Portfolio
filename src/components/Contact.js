import React from "react"
import {Container} from "reactstrap"


const Contact = () => {
    return (
        <>
   
                       <form>
                           <p>Your name</p>
                           <input type="text"></input>
                           <p>Your email</p>

                           <input type="email"></input>
                           <p>Short description</p>

                           <textarea className={`textarea`} type="textArea" rows="4" cols="50"></textarea>
                           <br/>
                    
                            <input type="submit"></input>
                            <a href="mailto:sapacyga@gmail.com">Or email me here</a>
                       </form>
                        
           
        </>
    )
}
export default Contact