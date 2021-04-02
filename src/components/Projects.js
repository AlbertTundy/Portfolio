import {Container, Row, Col} from "reactstrap"
import React from "react"
import GridComponent from "./Grid"

import "../App.css"
import urban from "./images/urban.png"
import communityCar from "./images/CommunityCarShare.png"
import burger from "./images/burger.png"
import noteTaker from "./images/note.png"
import dragon from "./images/dragon.png"
import employee from "./images/employee.png"

const Projects = () => {
    return (
        <div className="project-cont">
        <Container >
            <Row>
                <Col>
                    <GridComponent>
                        <h3>Urban Eldorado (RepositoryForAwesomeProject)</h3>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"target="_blank"><img className="projectStyles" src={urban} alt="Urban Eldorado" /></a>
                        <p className="text-color">
                            This was the first group project I participated in. It's an app that will give population and a few other statistics once you type in a city.
                        </p>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent >
                        <h3>community_car_share </h3>
                        <a href= "https://thawing-reaches-91071.herokuapp.com/"target="_blank" ><img className="projectStyles" src={communityCar} alt="Urban Eldorado"/></a>
                        <p className="text-color">
                            This was a Community Car share app we built while learning about SQL.
                        </p>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <h3>Eat-Da-Burger</h3>
                        <a href= "https://sleepy-cliffs-41801.herokuapp.com/" target="_blank"><img className="projectStyles" src={burger} alt="EatTheBurger"/></a>
                        <p className="text-color">
                            The Eat-Da-Burger app was an important mile stone for me because I probably had more issues coding it then anything else. 
                        </p>
                    </GridComponent>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GridComponent>
                        <h3>employeeDirectory</h3>
                        <a href= "https://alberttundy.github.io/employeeDirectory/" target="_blank"><img className="projectStyles" src={employee} alt="employeeDirectory"/></a>
                        <p className="text-color">
                            My most recent project.
                        </p>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <h3>CanYouSurviveADragon</h3>
                        <a href= "https://alberttundy.github.io/CanYouSurviveADragon/" target="_blank"><img className="projectStyles" src={dragon} alt="Can you survive a dragon?"/></a>
                        <p className="text-color">
                            I had a lot of fun with this one. 
                        </p>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <h3>NoteTaker5000</h3>
                        <a href= "https://warm-woodland-38565.herokuapp.com/" target="_blank"><img className="projectStyles" src={noteTaker} alt="Note Taker" /></a>
                        <p className="text-color">
                            A note taking app. 
                        </p>
                    </GridComponent>
                </Col>
            </Row>
        </Container>

        </div>
    )
}
export default Projects