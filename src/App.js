import "./App.css";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Tilt } from "@jdion/tilt-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Banner from "@hackclub/banner";

import billboard from "./art/billboard.png";
import title from "./art/title.png";
import bg1 from "./art/hero/bg1.png";
import bg2 from "./art/hero/bg2.png";
import bg3 from "./art/hero/bg3.png";
import bg4 from "./art/hero/bg4.png";
import bg5 from "./art/hero/bg5.png";
import breakline from "./art/breakline.png";
import sparks from "./art/sparks.gif";
import aboutbkgr from "./art/aboutbkgr.png";
import smoke from "./art/smoke.png";

import apo1 from "./art/images/apo1.png";
import apo2 from "./art/images/apo2.png";
import apo3 from "./art/images/apo3.png";
import apo4 from "./art/images/apo4.png";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      console.log("particles.js loaded");
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      <Banner />
      <div
        class="landing"
        className="relative flex flex-col justify-center text-center bg-no-repeat bg-cover bg-top -z-10 overflow-hidden select-none pointer-events-none"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        {init && (
          <Particles options={particlesOptions} className="absolute inset-0" />
        )}

        {/*<p className="text-3xl inter mb-4 mx-4">
          Hack Club's game jam for high schoolers
        </p>
        <p className="inter">November 9-10th, 2024 // in-person, worldwide</p> */}

        <HeroBg />

        <img src={breakline} alt="" className="w-full -mt-[35%] z-10" />
      </div>

      <div className="-mt-5 sm:-mt-12 md:-mt-32 2xl:-mt-80">
        <div className="flex justify-center text-center overflow-hidden">
          <div
            className="m-5 max-w-6xl min-w-[500px] grow bg-no-repeat bg-contain bg-center py-12 sm:pt-32 lg:py-64 clear"
            style={{ backgroundImage: `url(${aboutbkgr})` }}
          >
            <div style={{}}>
              <p
                className="inter text-lg max-w-xs mx-auto"
                style={{
                  textShadow:
                    "5px 5px 20px rgba(0, 255, 0, 1), -5px -5px 20px rgba(0, 0, 255, 1), 0px 0px 20px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 10px rgba(0, 0, 0, 1),",
                }}
              >
                This fall, Hack Club is running its biggest hackathon yet: a
                game jam where over 5k teens across 250 locations will come
                together for 12-24 hours to make games together.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center m-5 my-24">
          <p className="text-3xl pb-2">Artist, Musician or Hacker?</p>
          <p className="text-3xl">
            Sign up to make games with your friends over the weekend!
          </p>
          <p className="text-3xl mb-8"></p>
          <Cards />
        </div>

        <div className="flex flex-col justify-center text-center mb-24">
          <div className="m-5">
            <p className="mb-6 text-4xl">how to play</p>
            <div className="flex justify-center mx-4 my-14">
              <div className="border-4 rounded-lg border-lightpurp flex flex-wrap items-center justify-center px-4 py-8 inter max-w-6xl grow">
                <div className="bg-darkpurp rounded-lg my-4 py-10 mx-3">
                  <p className="my-10 mx-5 max-w-44">
                    <img src="" />
                    1. find your local hackathon using the event locator below
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-10 mx-3">
                  <p className="my-10 mx-5 max-w-44">
                    2. find a team of other high school students
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-10 mx-3">
                  <p className="my-10 mx-5 max-w-44">
                    3. build a game from scratch that weekend
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-10 mx-3">
                  <p className="my-10 mx-5 max-w-44">
                    4. show off your project!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="faq" className="flex flex-col justify-center text-center">
          <div className="m-5">
            <p className="mb-6 text-4xl">frequently asked questions</p>
            <div class="flex justify-center">
              <Faq2 />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 p-6 bg-darkpurp text-lg">
        <a href="https://hackclub.com" className="mx-4">
          Hack Club
        </a>{" "}
        |{" "}
        <a href="https://hackclub.com/slack/" className="mx-4">
          Slack
        </a>{" "}
        |{" "}
        <a href="https://www.instagram.com/starthackclub/" className="mx-4">
          Instagram
        </a>
      </div>
    </div>
  );
}

const Faq = ({ question, answer }) => {
  return (
    <div className="bg-darkpurp rounded-lg p-5">
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

function Faq2() {
  return (
    <div className="p-5 gap-8 inter grid lg:grid-cols-2 max-w-xl lg:max-w-6xl grow grid-rows-8 lg:grid-rows-4">
      <div className="bg-darkpurp rounded-lg p-5">
        <p className="mb-2 text-xl">
          Am I eligible to participate in Counterspell?
        </p>
        <p>
          If you're 18 or under, yes, we are so excited to see you! If you're
          over 18 but still in high school, shoot us an email at{" "}
          <a href="mailto:counterspell@hackclub.com">
            counterspell@hackclub.com.
          </a>
        </p>
      </div>
      <Faq
        question="Does participating cost anything?"
        answer="Nope! We'll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
      />
      <div className="bg-darkpurp rounded-lg p-5">
        <p className="mb-2 text-xl">What has Hack Club done before?</p>
        <p>
          We have run multiple events of this scale around the world. Each one,
          however is special in its own way. The summer of '21, we{" "}
          <a
            href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub"
            rel="noopener noreferrer"
          >
            chartered a train across America
          </a>{" "}
          and ran the world's longest hackathon on land. Last year, we ran an
          outdoors do-it-yourself camping adventure in Cabot, Vermont. Check it
          out{" "}
          <a
            href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub"
            rel="noopener noreferrer"
          >
            here
          </a>
          !
        </p>
      </div>
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
      <div className="bg-darkpurp rounded-lg p-5">
        <p className="mb-2 text-xl">
          My parents are worried! What should I do?
        </p>
        <p>
          We're here to help! Ask them to reach out to us at{" "}
          <a href="mailto:counterspell@hackclub.com">
            counterspell@hackclub.com
          </a>{" "}
          and we'll make sure to answer all their questions!
        </p>
      </div>
      <div className="bg-darkpurp rounded-lg p-5">
        <p className="mb-2 text-xl">
          I have more questions, how can I reach out?
        </p>
        <p>
          Contact us! Reach out at{" "}
          <a href="https://hackclub.com/slack/" rel="noopener noreferrer">
            #counterspell
          </a>{" "}
          on the Hack Club Slack or email us at{" "}
          <a href="mailto:counterspell@hackclub.com">
            counterspell@hackclub.com
          </a>
          . We're always ready to answer all your questions!
        </p>
      </div>
    </div>
  );
}

const HeroBg = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="max-w-2xl 2xl:max-w-6xl relative w-full"
          style={{ transform: `translateY(${screenWidth > 640 ? (scrollY * 5) / 20 : 0}px)` }}
        >
          <img
            src={billboard}
            alt="Billboard"
            className="w-full h-auto mt-[5%]"
          />
          <img
            src={title}
            alt="Counterspell"
            className="absolute h-auto top-[10%] w-full scale-[85%]"
          />
          <img
            src={smoke}
            alt="Smoke"
            className="absolute h-auto -top-[4%] w-full scale-[80%] translate-x-[7.5%]"
          />
          <img
            src={sparks}
            alt="Sparks"
            className="absolute z-10 h-auto top-[5%] w-full scale-[110%]"
          />
        </div>
      </div>
      <div class="translate-y-[35vw] md:translate-y-[200px] translate-x-[50vw] 2xl:translate-x-[120vw] scale-[300%] md:scale-[250%] 2xl:scale-[350%] -z-50">
        <img
          className="absolute bottom-0 bg-no-repeat -z-10 -mb-[60px] 2xl:-mb-[20px]"
          style={{ transform: `translateY(${screenWidth > 640 ? (scrollY * 1) / 20 : 0}px)` }}
          src={bg1}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-20 -mb-[45px] 2xl:-mb-[10px]"
          style={{ transform: `translateY(${screenWidth > 640 ? (scrollY * 2) / 20 : 0}px)` }}
          src={bg2}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-30 -mb-[25px] 2xl:mb-0 2xl:bottom-[10px]"
          style={{ transform: `translateY(${screenWidth > 640 ? (scrollY * 3) / 20 : 0}px)` }}
          src={bg3}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-40 2xl:bottom-[40px]"
          style={{ transform: `translateY(${screenWidth > 640 ? (scrollY * 4) / 20 : 0}px)` }}
          src={bg4}
          alt=""
        />
      </div>
    </>
  );
};
