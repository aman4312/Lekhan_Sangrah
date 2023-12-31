import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  // useEffect(() => {
  //   const navigate = useNavigate();
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     navigate("/mynotes");
  //   }
  // }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title"> Welcome to Lekhan Sangrah</h1>
              <p className="subtitle">One Safe place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  //variant="outline-property"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
