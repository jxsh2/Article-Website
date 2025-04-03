import React from "react";
import "../Footer/FooterStyle.css";

const FooterSection = () => {
  return (
    <footer className="footer-frame-parent">
      <div className="footer-frame-group">
        <div className="footer-download-parent">
          <b className="footer-download">DOWNLOAD</b>
          <a
            href="https://playvalorant.com/en-us/download/"
            target="__blank"
            className="footer-valorant"
          >
            VALORANT
          </a>
        </div>
        <div className="footer-newsletter-parent">
          <b className="footer-newsletter-title">Newsletter</b>
          <div className="footer-newsletter-text">
            Subscribe to our newsletter to keep you updated on VCT Events!
          </div>
          <input className="footer-input" type="text" placeholder="Email" />
          <button className="footer-subscribe">SUBSCRIBE</button>
        </div>
        <div className="footer-facebook-parent">
          <a
            href="https://www.facebook.com"
            target="__blank"
            className="footer-newsletter"
          >
            FACEBOOK
          </a>
          <a
            href="https://www.instagram.com"
            target="__blank"
            className="footer-newsletter"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.tiktok.com"
            target="__blank"
            className="footer-newsletter"
          >
            TIKTOK
          </a>
          <a
            href="https://www.twitter.com"
            target="__blank"
            className="footer-x"
          >
            X
          </a>
          <b className="footer-newsletter-credits">
            © 2024 VALORANT DISPATCH. All rights reserved.
          </b>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
