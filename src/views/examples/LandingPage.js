import React from "react";
import {

  Container,
  Row,
  Col,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import earthImage from "assets/img/earth.png";
import "assets/demo/demo.css"; 

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Exploring the Cosmos</h2>
                <h5 className="description">
                  "Experience the wonders of space exploration with our NASA
                  Web display page! Immerse yourself in a treasure trove of
                  breathtaking images, groundbreaking discoveries, and
                  captivating videos from NASA's missions across the solar
                  system and beyond. From the latest advancements in planetary
                  science to stunning views of Earth from orbit, embark on an
                  awe-inspiring journey through the cosmos with NASA as your
                  guide."
                </h5>
              
                {/* Earth image with animation */}
                <img src={earthImage} alt="Earth" className="earth-image" />
              </Col>
            </Row>
           
          </Container>
        </div>
      
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
