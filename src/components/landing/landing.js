import Header from "../header/header";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing ">
      <Header />
      <div className="center-element container text-white  text-center">
        <div className="landing-label">
          <button className="pill-label">Voice-First, Business-Ready</button>
        </div>

        <div className="landing-content">
          <h1 className="landing-title text-whit">
            Deliver instant AI-powered voice experiences to your customers
          </h1>
          <p className="landing-subtitle">
            Nouf is an AI Voice Agent that lets your users order, ask, or
            interact with your service using natural conversation — fully
            integrated with your platform in minutes.
          </p>
        </div>
        <div className="landing-buttons d-flex justify-content-center mt-1">
          <button className="btn  btn-light btn-lg get-started-btn rounded-pill">
            Get Started {">"}
          </button>
        </div>
      </div>
      <div className="landing-image">
        <img
          src={require("../../assets/Clip1.png")}
          className="clip1"
          alt="Phone Image"
        />
        <img
          src={require("../../assets/Clip2.png")}
          className="clip2"
          alt="Phone Image"
        />

        <img
          src={require("../../assets//Bubble.png")}
          className="bubble"
          alt="Chat Bubble"
        />
        <img
          src={require("../../assets/Iphon.png")}
          className="iphone"
          alt="Phone Image"
        />
      </div>
    </div>
  );
};

export default Landing;
