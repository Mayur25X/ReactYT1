import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1>ThechyStar</h1>
          <p>@all rights reserved</p>
        </div>
        <div className="followList">
          <h5>Follow us on</h5>
          <div>
            <a href="https://www.github.com/Mayur25X" target="_balnk">
              <div className="follow">
                <AiFillGithub />
                Github
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mayur-uikey-38291321a/"
              target="_balnk"
            >
              <div className="follow">
                <AiFillLinkedin />
                Linkedin
              </div>
            </a>
            <a href="https://www.youtube.com/" target="_balnk">
              <div className="follow">
                <AiFillYoutube />
                Youtube
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_balnk">
              <div className="follow">
                <AiFillInstagram />
                Instagram
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
