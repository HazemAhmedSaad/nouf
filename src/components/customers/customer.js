import { useState } from "react";
import "../customers/customer.css";

const Customers = () => {
  const [techData] = useState([
    {
      id: 1,
      icon: require("../../../src/assets/cards/ic1.png"),
      title: "Plug-and-Play API",
      desc: (
        <>
          <span>Integrate Nouf </span> in minutes, no complex setup. Works
          seamlessly with web and mobile apps instantly.
        </>
      ),
    },
    {
      id: 2,
      icon: require("../../../src/assets/cards/ic2.png"),
      title: "Accurate Speech Recognition",
      desc: (
        <>
          <span>Understands </span> Arabic & English clearly for every customer
        </>
      ),
    },
    {
      id: 3,
      icon: require("../../../src/assets/cards/ic3.png"),
      title: "Intent-Based AI",
      desc: (
        <>
          <span>Recognizes </span> what users mean, not just the words they say
        </>
      ),
    },
    {
      id: 4,
      icon: require("../../../src/assets/cards/ic4.png"),
      title: "Enterprise-Grade Security",
      desc: (
        <>
          <span>Protects </span> user data with full encryption and compliance
        </>
      ),
    },
    {
      id: 5,
      icon: require("../../../src/assets/cards/ic5.png"),
      title: "Easy Customization",
      desc: (
        <>
          <span>Integrate Nouf </span> in minutes, no complex setup.
        </>
      ),
    },
    {
      id: 6,
      icon: require("../../../src/assets/cards/ic6.png"),
      title: "Advanced Analytics",
      desc: (
        <>
          <span>Track </span> interactions, engagement, and conversions easily
        </>
      ),
    },
  ]);
  return (
    <div className="customers mt-1 container mb-5">
      <p className="head-title text-center">
        160,000+ customers in over 120 countries grow their businesses with Nouf{" "}
      </p>
      <div className="customer-logos d-flex justify-content-center align-items-center flex-wrap gap-5 py-4">
        <img
          src={require("../../../src/assets/Logos/logo1.png")}
          alt="Customer 1"
        />
        <img
          src={require("../../../src/assets/Logos/logo2.png")}
          alt="Customer 2"
        />
        <img
          src={require("../../../src/assets/Logos/logo3.png")}
          alt="Customer 3"
        />
        <img
          src={require("../../../src/assets/Logos/logo4.png")}
          alt="Customer 4"
        />
        <img
          src={require("../../../src/assets/Logos/logo5.png")}
          alt="Customer 5"
        />
        <img
          src={require("../../../src/assets/Logos/logo6.png")}
          alt="Customer 6"
        />
        <img
          src={require("../../../src/assets/Logos/logo7.png")}
          alt="Customer 7"
        />
      </div>
      <div className="tech ">
        <h2 className="text-center text-white">Features & Tech</h2>
        <div className="row mx-auto container text-white row-cols-1 row-cols-md-2 row-cols-lg-3">
          {techData.map((tech) => (
            <div className="col">
              <div className="tech-card-grand">
                <div className="tech-card-parnt">
                  <div className="tech-card d-flex flex-column align-items-center text-center p-4">
                    <div className="img1">
                      <img
                        src={require("../../../src/assets/cards/Group.png")}
                        className="group"
                        alt="Tech 1"
                      />
                      <div className="bgimg1">
                        <img src={tech.icon} alt={tech.title} />
                      </div>
                    </div>
                    <h5 className="m-2">{tech.title}</h5>
                    <p className="tech-text">{tech.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
