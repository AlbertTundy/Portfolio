import React from "react"
import GridComponent from "./Grid"
import {Container, Row, Col} from "reactstrap"
import "../App.css"
import urban from "./images/urban.png"
import communityCar from "./images/CommunityCarShare.png"
const Projects = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <GridComponent>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src={urban} alt="Urban Eldorado"/></a>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent >
                        <div >
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src={communityCar} alt="Urban Eldorado"/></a>
                        </div>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src="./images/urban.png" alt="Urban Eldorado"/></a>
                    </GridComponent>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GridComponent>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Urban Eldorado"/></a>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Urban Eldorado"/></a>
                    </GridComponent>
                </Col>
                <Col>
                    <GridComponent>
                        <a href= "https://pwg26.github.io/RepositoryForAwesomeProject/"><img className="projectStyles" src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Urban Eldorado" /></a>
                    </GridComponent>
                </Col>
            </Row>
        </Container>

        </>
    )
}
export default Projects