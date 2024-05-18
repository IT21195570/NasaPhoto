import React from "react";


import { Button, Container } from "reactstrap";



function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/galaxy.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 className="presentation-title">EXPLORE NASA</h1>
            <h3>DIG IN TO GALAXY</h3>
            <br />
            <Button
              href="https://youtu.be/WeA7edXsU40?si=6biefuV1HZay5N6C"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
         
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
