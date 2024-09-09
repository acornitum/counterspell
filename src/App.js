import "./App.css";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Tilt } from "@jdion/tilt-react";

import billboard from "./art/billboard.png";
import title from "./art/title.png";
import background from "./art/background.png";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      <div>
        <img src={background} className="absolute -z-30" style={{width: "100%"}}/>
      </div>
      {init && (
        <div className="particles-container">
          <Particles options={particlesOptions} />
        </div>
      )}
      <div
        class="landing"
        className="flex flex-col justify-center h-screen"
        style={{}}
      >
        <div className="text-center">
          <div className="flex justify-center items-cen">
            <div
              className="flex flex-col justify-center items-center relative"
              style={{ width: "60%", height: "auto" }}
            >
              <img
                src={billboard}
                style={{ position: "absolute", width: "100%", height: "auto" }}
              />
              <img
                src={title}
                alt="Counterspell"
                className="absolute"
                style={{
                  width: "70%",
                  height: "auto",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -115%)",
                }}
              />
            </div>
          </div>

          <p className="text-3xl inter mb-4 mx-4">
            Hack Club's game jam for high schoolers
          </p>
          <p className="inter">November 9-10th, 2024 // in-person, worldwide</p>
        </div>
      </div>

      <div className="bg-dark border-t-4 border-mag">
        <div className="flex flex-col justify-center text-center m-5 my-24">
          <p className="text-3xl pb-2">
            Calling all hackers, artists, and musicians!
          </p>
          <p className="text-3xl">
            This is a <span className="text-blue">game jam</span> where you can{" "}
            <span className="text-mag">choose your own adventure</span>
          </p>
          <p className="text-3xl mb-8"></p>
          <Cards />
        </div>

        <div className="flex flex-col justify-center text-center my-64">
          <div className="m-5">
            <p className="mb-6 text-4xl">imagine what you'll create</p>
            <p className="inter text-lg max-w-lg mx-auto">
              This fall, Hack Club is running its biggest hackathon yet: a game
              jam where over 5k teens across 250 locations will come together
              for 12-24 hours to make games together.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center mb-24">
          <div className="m-5">
            <p className="mb-6 text-4xl">how to play</p>
            <div className="border-4 rounded-lg border-lightpurp flex flex-wrap items-center justify-center p-10 m-16 inter">
              <Howtoplay ins="1. find your local hackathon using the event locator below" />
              <Howtoplay ins="1. find your local hackathon using the event locator below" />
              <Howtoplay ins="1. find your local hackathon using the event locator below" />
              <Howtoplay ins="1. find your local hackathon using the event locator below" />
            </div>
          </div>
        </div>

        <div class="faq" className="flex flex-col justify-center text-center">
          <div className="m-5">
            <p className="mb-6 text-4xl">frequently asked questions</p>
            <div className="items-center justify-center p-5 inter grid">
              <Faq
                question="Am I eligible to participate in Counterspell?"
                answer="If you're 18 or under, yes, we are so excited to see you! If you're over 18 but still in high school, shoot us an email at counterspell@hackclub.com."
              />
              <Faq
                question="Does participating cost anything?"
                answer="Nope! We'll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
              />
              <Faq
                question="What has Hack Club done before?"
                answer="We have run multiple events of this scale around the world. Each one, however is special in its own way. The summer of '21, we chartered a train across America and ran the world's longest hackathon on land. Earlier this year, we ran an outdoors do-it-yourself camping adventure in Cabot, Vermont. Check it out here! ADD LINK"
              />
              <Faq
                question="What can I make at Counterspell?"
                answer="At Counterspell, we're building video games of all kinds! The theme will be revealed at the start of the hackathon."
              />
              <Faq
                question="What do I need to bring to Counterspell?"
                answer="Your laptop, charger, and an open mind! If your location is overnight, also bring toiletries, and a sleeping bag."
              />
              <Faq
                question="I'm not good at coding, can I join?"
                answer="This hackathon is for hackers of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out Hack Club Workshops."
              />
              <Faq
                question="My parents are worried! What should I do?"
                answer="We're here to help, ask them to reach out to us at counterspell@hackclub.com and we'll make sure to answer all their questions!"
              />
              <Faq
                question="I have more questions, how can I reach out?"
                answer="Contact us! Reach out at #counterspell on the Hack Club Slack or email us at counterspell@hackclub.com. We're always ready to answer all your questions!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Howtoplay = ({ ins }) => {
  return (
    <div className="bg-darkpurp rounded-lg my-4 py-10 mx-3">
      <p className="my-10 mx-5 max-w-44">{ins}</p>
    </div>
  );
};

const Faq = ({ question, answer }) => {
  return (
    <div className="bg-darkpurp rounded-lg p-5 max-w-lg m-4">
      <p className="mb-2 text-xl">{question}</p>
      <p>{answer}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Tilt
        className="bg-lightpurp rounded-lg p-5 m-4"
        style={{ width: "340px", height: "500px" }}
      ></Tilt>
      <Tilt
        className="bg-lightpurp rounded-lg p-5 m-4"
        style={{ width: "340px", height: "500px" }}
      ></Tilt>
      <Tilt
        className="bg-lightpurp rounded-lg p-5 m-4"
        style={{ width: "340px", height: "500px" }}
      ></Tilt>
    </div>
  );
};
