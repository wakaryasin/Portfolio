import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <section>
      <Particle />
      <Container fluid className="contact-section">
     
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Feel free to <span className="purple">Contact </span> me
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+92 320 0814627" className="con-det">
                    +92 320 0814627
                  </a>
                </div>

                <div>
                <LinkedInIcon   
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="https://www.linkedin.com/in/waqar-yasin-5796967a/"
                    className="con-det"
                  >
                    Muhammad Waqar Yasin
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:wakaryasin@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    wakaryasin@gmail.com
                  </a>
                </div>
              </div>
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/wakaryasin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:wakaryasin@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <EmailIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/waqar-yasin-5796967a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                  href="https://stackoverflow.com/users/7949520/waqar-yasin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
