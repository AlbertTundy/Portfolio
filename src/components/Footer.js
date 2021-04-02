import React from "react"
import resume from "../files/resume.pdf"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="d-flex">
                            <p>© Copyright 2021 Stephen Pacyga</p>
                        </div>
                        <div className="d-flex">
                            <a href="(303)842-9603">+(303)842-9603</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" href="https://github.com/AlbertTundy">GitHub</a>
                                <br/>
                                <a className="footer-nav" href="https://www.linkedin.com/in/stephen-pacyga-247b14202/">LinkedIn</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav" href={resume} className={`resume-download`} download="Stephen-Pacyga-Resume">Résumé download</a>
                                <br/>
                                <div className="d-flex">
                            <p>sapacyga@gmail.com</p>
                        </div>
                                <br/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Footer
