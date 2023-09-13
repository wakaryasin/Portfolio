import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Waqar Yasin</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="https://gitlab.com/wakaryasin"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:wakaryasin@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon sx={{ fontSize: 15 }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/waqar-yasin-5796967a/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer" 
                  >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                  href="https://stackoverflow.com/users/7949520/waqar-yasin"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FaStackOverflow />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
