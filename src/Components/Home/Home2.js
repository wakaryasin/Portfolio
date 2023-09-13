import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an 
              <span className="purple"> Android App Developer </span>
              from Pakistan. I have 
              <i>
                <b className="purple"> 5 Years </b>
              </i>
              experience in app development using
              <i>
                <b className="purple"> Java & Kotlin. </b>
              </i>
              I have worked on differnt architecture like 
              <i>
                <b className="purple"> MVVM, MVC, MVP. </b>
              </i>
              <br />
              I also worked on different Jetpack components like 
              <i>
                <b className="purple"> Room,  Dependency Injection, WorkManger, ViewModel, LiveData, Navigation, Paging, Data Binding, View Binding.  </b>
              </i>
              Along this also implemented social Logins
              <i>
                <b className="purple"> Google, Facebook, Firebase  </b>
              </i>
              authentication and other Database authentications. Also implemented Voip Audio & video Calling SDK 
              <i>
                <b className="purple"> Twillio Calling, SendBird, QuickBlox.  </b>
              </i>
              and different payment methods 
              <i>
                <b className="purple"> Stripe, Ekyash, EasyPesa, JazzCash. </b>
              </i>
              and also
               <i>
                <b className="purple"> Git Version </b>
              </i>
              controlling.
              I have a diverse type of experience in different kind of products development and eager to work with full dedication.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple"> Connect </span> with me
            </h1>
            
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
  );
}
export default Home2;
