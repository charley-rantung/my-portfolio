import React from "react";
import "./home.scss";
import { NavBar } from "../../components";
import Facebook from "../../assets/icons/facebook-dark.svg";
import Twitter from "../../assets/icons/twitter-dark.svg";
import LinkedIn from "../../assets/icons/linkedin-dark.svg";
import Tiktok from "../../assets/icons/tiktok-dark.svg";
import WhatsApp from "../../assets/icons/whatsapp-dark.svg";
import Instagram from "../../assets/icons/instagram-dark.svg";
import Robot from "../../assets/images/business-3d-happy-robot-assistant-waving-hello.png";
import VR from "../../assets/images/casual-life-3d-close-up-of-white-vr-headset.png";

const Home = () => {
  return (
    <>
      <NavBar current={"home"} />
      <main className="home">
        <section id="Hero" className="section-container">
          <div className="hero-wrapper content-container">
            <div className="left">
              <div className="title">
                <h1>I'm</h1>
                <h1>Charley Rantung</h1>
              </div>
              <div className="separator" />
              <p className="description">
                I challenge myself to be able to create a large and useful
                application, which can help solve the problems of the people
                around me.
              </p>
              <div className="social-media">
                <a
                  href="https://web.facebook.com/Charley.Rantung/"
                  target={"_blank"}
                >
                  <img src={Facebook} />
                </a>
                <a href="">
                  <img src={Twitter} />
                </a>
                <a href="https://www.linkedin.com/in/charley-rantung-3452481a9/">
                  <img src={LinkedIn} />
                </a>
                <a href="">
                  <img src={Tiktok} />
                </a>
                <a href="https://wa.me/+6282312030313" target={"_blank"}>
                  <img src={WhatsApp} />
                </a>
                <a
                  href="https://www.instagram.com/rantungcharley/"
                  target={"_blank"}
                >
                  <img src={Instagram} />
                </a>
              </div>
            </div>
            <div className="right">
              <div className="illustration">
                <img src={Robot} />
                <img src={VR} />
              </div>
            </div>
          </div>
        </section>
        <section id="temp"></section>
      </main>
    </>
  );
};

export default Home;
