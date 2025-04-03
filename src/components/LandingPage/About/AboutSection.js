import React from "react";
import "../About/AboutStyle.css";

const AboutSection = () => {
  return (
    <section className="about-cont" id="about">
      <div className="about-frame">
        <p className="about-text">
          Welcome to VCT Dispatch, your dedicated source for the latest news in
          the Valorant Champions Tour (VCT). We bring you timely updates and
          breaking news from the world of competitive Valorant, covering
          everything from team announcements and tournament results to the
          biggest stories shaping the scene. At VCT Dispatch, we focus solely on
          delivering pure news content, keeping you informed about the
          developments in the VCT without any distractions. Whether you're a fan
          looking to stay up-to-date or a newcomer curious about the esports
          landscape, VCT Dispatch is here to provide you with clear, concise,
          and accurate news coverage.
        </p>
        <div className="about-rec" />
        <h1 className="huge header about-title">ABOUT US</h1>
      </div>
    </section>
  );
};

export default AboutSection;
