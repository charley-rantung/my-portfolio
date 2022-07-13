import React from "react";
import "./isometric-contact.scss";

const IsometricContact = () => {
  return (
    <div className="isometric-contact">
      <ul>
        <li style={{ "--i": 7 }}>
          <a href="#">
            <span></span>Hire me
          </a>
        </li>
        <li style={{ "--i": 6 }}>
          <a href="#">
            <span>
              <i class="fa-brands fa-facebook-f"></i>
            </span>
            Facebook
          </a>
        </li>
        <li style={{ "--i": 5 }}>
          <a href="#">
            <span>
              <i class="fa-brands fa-whatsapp"></i>
            </span>
            Whatsapp
          </a>
        </li>
        <li style={{ "--i": 4 }}>
          <a href="#">
            <span>
              <i class="fa-solid fa-at"></i>
            </span>
            Email
          </a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#">
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            Instagram
          </a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#">
            <span>
              <i class="fa-brands fa-discord"></i>
            </span>
            Discord
          </a>
        </li>
        <li style={{ "--i": 1 }}>
          <a href="#">
            <span>
              <i class="fa-brands fa-linkedin-in"></i>
            </span>
            Linkedin
          </a>
        </li>
        <li style={{ "--i": 0 }}>
          <a href="#">
            <span></span>
            <div />
          </a>
        </li>
      </ul>
      {/* <h1>Haloo</h1> */}
    </div>
  );
};

export default IsometricContact;
