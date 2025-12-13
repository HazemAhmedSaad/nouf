import "./customer.css";

const Customers = () => {
  return (
    <div className="customers mt-1 container mb-5">
      <p className="head-title text-center">
        160,000+ customers in over 120 countries grow their businesses with Nouf{" "}
      </p>
      <div className="customer-logos d-flex justify-content-center align-items-center flex-wrap gap-5 py-4">
        <img
          src={require("../../src/assets/Logos/logo1.png")}
          alt="Customer 1"
        />
        <img
          src={require("../../src/assets/Logos/logo2.png")}
          alt="Customer 2"
        />
        <img
          src={require("../../src/assets/Logos/logo3.png")}
          alt="Customer 3"
        />
        <img
          src={require("../../src/assets/Logos/logo4.png")}
          alt="Customer 4"
        />
        <img
          src={require("../../src/assets/Logos/logo5.png")}
          alt="Customer 5"
        />
        <img
          src={require("../../src/assets/Logos/logo6.png")}
          alt="Customer 6"
        />
        <img
          src={require("../../src/assets/Logos/logo7.png")}
          alt="Customer 7"
        />
      </div>
      <div className="tech mt-5">
        <h2 className="text-center mb-4 text-white">Features & Tech</h2>
        <div className="row text-white row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic1.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Plug-and-Play API</h5>
              <p className="tech-text">
                <span>Integrate Nouf </span> in minutes, no complex setup. Works
                seamlessly with web and mobile apps instantly.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic2.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Accurate Speech Recognition</h5>
              <p className="tech-text">
                <span>Understands </span> Arabic & English clearly for every
                customer
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic3.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Intent-Based AI</h5>
              <p className="tech-text">
                <span>Recognizes</span> what users mean, not just the words they
                say
              </p>
            </div>
          </div>
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic4.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Enterprise-Grade Security</h5>
              <p className="tech-text">
                <span >Protects </span>Protects user data with full encryption and compliance
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic5.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Easy Customization</h5>
              <p className="tech-text">
                <span >Integrate Nouf </span> in minutes, no complex setup. Works seamlessly with web and mobile apps instantly.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="tech-card d-flex flex-column align-items-center text-center p-4">
              <div className="img1">
                <img
                  src={require("../../src/assets/cards/Group.png")}
                  className="group"
                  alt="Tech 1"
                />
                <div className="bgimg1">
                  <img
                    src={require("../../src/assets/cards/ic6.png")}
                    alt="Tech 1"
                  />
                </div>
              </div>
              <h5 className="m-2 ">Plug-and-Play API</h5>
              <p className="tech-text">
                <span >Track</span>  interactions, engagement, and conversions easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
