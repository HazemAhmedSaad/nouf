import { useState } from "react";
import "./timeline.css";

const TimeLine = () => {
  const [steps] = useState([
    {
      id: 1,
      title: "Press the Mic",
      desc: "Simply tap the microphone button to start your voice search instantly",
      icon: require("../../assets/timeLine/tmli1.png"),
    },
    {
      id: 2,
      title: "Say What You’re Looking For ",
      desc: "Speak naturally — whether it’s a product name, category, or description, Nouf will understand.",
      icon: require("../../assets/timeLine/tmli2.png"),
    },
    {
      id: 3,
      title: "Nouf Understands",
      desc: "Nouf instantly understands your request.",
      icon: require("../../assets/timeLine/tmli3.png"),
    },
    {
      id: 4,
      title: "Get Smart Suggestions",
      desc: " See the best matching products.",
      icon: require("../../assets/timeLine/tmli4.png"),
    },
    {
      id: 5,
      title: "Refine with Simple Questions",
      desc: " Answer a few quick questions if you want to specify color, size, or price",
      icon: require("../../assets/timeLine/tmli5.png"),
    },
    {
      id: 6,
      title: "Choose & BuyPress the Mic",
      desc: " Select the best product and add it to your cart effortlessly.",
      icon: require("../../assets/timeLine/tmli6.png"),
    },
  ]);

  return (
    <div className="time-line mb-5 py-5  container">
      <h3 className="mb-5 py-5">How it work..?</h3>

      <div className="time-line-container  pb-5">
        <div className="time-line-column">
          <div></div>
        </div>

        <div className="group-item">
          {steps.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`time-line-item row ${
                  !isRight ? "flex-row-reverse" : ""
                }`}
              >
                {/* icon */}
                <div
                  className={`time-line-icon col ${
                    isRight ? "text-end me-4" : "ms-4"
                  }`}
                >
                  <img src={item.icon} alt="Mic Icon" />
                </div>

                {/* content */}
                <div
                  className={`time-line-content col d-flex flex-column ${
                    isRight ? "text-start ms-4" : "text-end me-4"
                  }`}
                >
                  <div
                    className={`time-line-number rounded-circle ${
                      !isRight ? "align-self-end" : ""
                    }`}
                  >
                    {item.id}
                  </div>

                  <h5 className="time-line-title">{item.title}</h5>
                  <p className="time-line-description">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
