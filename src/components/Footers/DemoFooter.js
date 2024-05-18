
import React from "react";
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://api.nasa.gov"
                  target="_blank"
                >
                  APIs
                </a>
              </li>
            </ul>
          </nav>
       
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
