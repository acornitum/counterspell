import "./App.css";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { confetti } from "@tsparticles/confetti";
import particlesOptions from "./particles.json";
import { Tilt } from "react-next-tilt";
import Banner from "@hackclub/banner";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS as dndCSS } from "@dnd-kit/utilities";

import faqData from "./faqData";

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
import smoke from "./art/smoke.gif";
import down from "./art/down.png";

import apo1 from "./art/images/apo1.png";
import apo2 from "./art/images/apo2.png";
import apo3 from "./art/images/apo3.png";
import apo4 from "./art/images/apo4.png";
import apo5 from "./art/images/apo5.png";

import hacker from "./art/cards/hacker.png";
import musician from "./art/cards/musician.png";
import artist from "./art/cards/artist.png"

import flare1 from "./art/flares/flare1.png";
import flare2 from "./art/flares/flare2.png";
import flare3 from "./art/flares/flare3.png";
import flare4 from "./art/flares/flare4.png";
import flare5 from "./art/flares/flare5.png";
import flare6 from "./art/flares/flare6.png";
import flare7 from "./art/flares/flare7.png";
import flare8 from "./art/flares/flare8.png";
import flare9 from "./art/flares/flare9.png";
import flare10 from "./art/flares/flare10.png";
import torch1 from "./art/flares/torch1.png";
import torch2 from "./art/flares/torch2.png";


import faq1 from "./art/faqbkgr/faq1.png";
import faq2 from "./art/faqbkgr/faq2.png";
import faq3 from "./art/faqbkgr/faq3.png";
import faq4 from "./art/faqbkgr/faq4.png";
import faq5 from "./art/faqbkgr/faq5.png";
import faq6 from "./art/faqbkgr/faq6.png";
import faq7 from "./art/faqbkgr/faq7.png";
import faq8 from "./art/faqbkgr/faq8.png";

const faqBkgrs = [faq1, faq2, faq3, faq4, faq5, faq6, faq7, faq8];

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
      <div class="absolute top-0 left-0 w-[25%] md:w-60 2xl:w-96">
        <Banner style={{ width: "100%" }} />
      </div>
      <div
        class="landing"
        className="relative flex flex-col justify-center text-center bg-no-repeat bg-cover bg-top -z-10 overflow-hidden select-none pointer-events-none"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        {/*{init && (
          <Particles options={particlesOptions} className="absolute inset-0" />
        )}*/}

        {/*<p className="text-3xl inter mb-4 mx-4">
          Hack Club's game jam for high schoolers
        </p>
        <p className="inter">November 9-10th, 2024 // in-person, worldwide</p> */}

        <HeroScroll />

        <img src={breakline} alt="" className="w-full -mt-[35%] z-10 -mb-2" />
      </div>

      <div className="relative">
        <img
          src={flare3}
          alt=""
          className="absolute -z-10"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <div className="relative">
        <img
          src={flare4}
          alt=""
          className="absolute -z-10"
          style={{ width: "300px", height: "auto", right: 0 }}
        />
      </div>
      <div className="mt-8 lg:-mt-32 2xl:-mt-64 3xl:-mt-96">
        <div className="flex flex-col justify-center text-center m-5 neuebit">
          <p className="text-6xl">
            Want to <span className="text-blue">organize Counterspell</span> in
            your city?
          </p>
        </div>

        <div className="flex justify-center text-center overflow-hidden">
          <div
            className="max-w-6xl h-[590px] grow bg-no-repeat bg-cover bg-center clear flex items-center justify-center"
            style={{ backgroundImage: `url(${aboutbkgr})` }}
          >
            <a
              className="text-7xl neuebit underline text-pink -ml-[15px]"
              href="https://forms.hackclub.com/t/5Q4tvcSYycus"
              target="_blank"
              rel="noopener noreferrer"
            >
              START
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={torch1}
            alt=""
            className="absolute -z-10"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        <div className="relative">
          <img
            src={torch2}
            alt=""
            className="absolute -z-10"
            style={{ width: "200px", height: "auto", right: 0 }}
          />
        </div>

        <div className="divide-y-4 divide-dashed divide-pink">

<div className="neuebit my-44 mx-5">
          <div className="flex justify-center items-center text-center">
            <p className="text-6xl mb-4">
              Happening simultaneously in <span className="text-pink">50 different cities</span>, including:
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-4xl text-center">

              <p className="inline-block whitespace-nowrap">Boston, MA</p>
              <p className="inline-block whitespace-nowrap">New York City, NY</p>
              <p className="inline-block whitespace-nowrap">Ottawa, ON</p>
              <p className="inline-block whitespace-nowrap">Basking Ridge, NJ</p>
              <p className="inline-block whitespace-nowrap">Austin, TX</p>
              <p className="inline-block whitespace-nowrap">San Francisco, CA</p>
              <p className="inline-block whitespace-nowrap">Burlington, VT</p>
              <p className="inline-block whitespace-nowrap">Oshkosh, WI</p>

          </div>
          <div className="flex justify-center items-center text-center text-4xl mt-4">
            <p>
              Don't see your own city?{" "}
              <a
                className="text-pink"
                href="https://forms.hackclub.com/t/5Q4tvcSYycus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Organize it yourself!
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center m-20 my-24 neuebit">
          <p className="text-6xl">
            <span className="text-blue">Artist</span>,
            <span className="text-green"> Musician </span> or
            <span className="text-pink"> Coder</span>?
          </p>
          <p className="text-6xl">
            Join one of the three guilds when you sign up!
          </p>
          <p className="text-3xl mb-8"></p>
          <Cards />
          <div className="mt-6">
            <b class="neuebit text-4xl">
            Spend a weekend making video games with your friends at our
              <span class="text-pink"> beginner-friendly game jam</span>, where
              you make games and win prizes!
            </b>
          </div>
        </div>


        </div>

        

        <div className="flex flex-col justify-center text-center mb-24 neuebit">
          <div className="m-5">
            <p className="text-6xl">Here's how Counterspell works:</p>
            <div className="flex justify-center mx-4 my-6">
              <div className="border-4 rounded-md border-lightpurp flex flex-wrap items-center justify-center inter py-8 grow">
                <div className="bg-darkpurp rounded-sm my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo1}
                      alt=""
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    1. Sign up for a Counterspell Event in your city
                  </p>
                </div>
                <div className="bg-darkpurp rounded-sm my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo2}
                      alt=""
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    2. Find a team of other teenagers at Counterspell
                  </p>
                </div>
                <div className="bg-darkpurp rounded-sm my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo3}
                      alt=""
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    3. Start building your game (no experience needed)
                  </p>
                </div>
                <div className="bg-darkpurp rounded-sm my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo5}
                      alt=""
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    4. Attend workshops, or talk to one of our mentors for help
                  </p>
                </div>

                <div className="bg-darkpurp rounded-sm my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo4}
                      alt=""
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    5. Ship what you made and share it with the rest of the
                    world!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={flare9}
            alt=""
            className="absolute -z-10 -mt-24 sm:-mt-40 lg:mt-0 w-[200px] sm:w-[300px] xl:w-[400px] h-auto -left-12 sm:left-0"
          />
        </div>
        <div className="relative">
          <img
            src={flare10}
            alt=""
            className="absolute -z-10 -mt-24 sm:-mt-32 lg:mt-0 w-[200px] sm:w-[300px] xl:w-[400px] h-auto -right-12 sm:right-0"
          />
        </div>

        <p className="text-6xl flex justify-center neuebit text-green">
          Schedule
        </p>
        <div className="flex justify-center text-center m-5 mt-8 sm:mt-20 xl:mt-4 my-4 mb-24 neuebit">
          <table
            class="table-auto"
            className="text-2xl xs:text-3xl sm:text-5xl text-left border-separate border-spacing-y-1 xs:border-spacing-y-4 "
          >
            <tbody>
              <tr>
                <td>Doors open </td>
                <td>11:00 AM</td>
              </tr>
              <tr>
                <td>Opening ceremony</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>12:30 PM</td>
              </tr>
              <tr>
                <td>Start working on your game! &nbsp; &nbsp; &nbsp;</td>
                <td>1:00 PM</td>
              </tr>
              <tr>
                <td>Gamedev workshop 1</td>
                <td>2:00 PM</td>
              </tr>
              <tr>
                <td>Activity 1</td>
                <td>4:00 PM</td>
              </tr>
              <tr>
                <td>Gamedev workshop 2</td>
                <td>4:00 PM</td>
              </tr>
              <tr>
                <td>Dinner</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Lightning talks</td>
                <td>8:00 PM</td>
              </tr>
              <tr>
                <td>Midnight Suprise</td>
                <td>12:00 AM</td>
              </tr>
              <tr>
                <td>Breakfast</td>
                <td>8:00 AM</td>
              </tr>
              <tr>
                <td>Game demos!</td>
                <td>10:30 AM</td>
              </tr>
              <tr>
                <td>Closing ceremony</td>
                <td>12:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="faq"
          className="flex flex-col justify-center text-center neuebit"
        >
          <div className="m-5">
            <p className="mb-6 text-6xl">Frequently Asked Questions</p>
            <div class="flex justify-center">
              <Faq />
            </div>
            <p className="text-2xl">
              Drag around the FAQ boxes to solve a puzzle!
            </p>
          </div>
        </div>
      </div>

      {/*<div className="neuebit my-20 mx-5">
          <div className="flex justify-center items-center text-center">
            <p className="text-3xl mb-4">
              Photos from past Hack Club hackathons:
            </p>{" "}
          </div>
          <div>

          </div>

      </div> */}

      <div className="mt-4 p-6 bg-darkpurp text-2xl neuebit">
        <div className="flex justify-center items-center ">
          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            Hack Club
          </a>{" "}
          |{" "}
          <a
            href="https://hackclub.com/slack/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            Slack
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/starthackclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            Instagram
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/aeralixe/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Art by Elena Baskakova (18, Boston)
          </a> | <a href="https://github.com/acornitum/counterspell" target="_blank" rel="noopener noreferrer" className="mx-2">Site built by Hack Clubbers</a>
        </div>
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Tilt className="m-4" scale={1.1}>
        <div>
          <img
            src={artist}
            alt="Artist card"
            className="rounded-lg max-w-[340px]"
          />
        </div>
      </Tilt>
      <Tilt className="m-4 rounded-lg" scale={1.1}>
        <div>
          <img
            src={musician}
            alt="Musician card"
            className="rounded-lg max-w-[340px]"
          />
        </div>
      </Tilt>
      <Tilt className="m-4 rounded-lg" scale={1.1}>
        <div>
          <img
            src={hacker}
            alt="Hacker card"
            className="rounded-lg  max-w-[340px]"
          />
        </div>
      </Tilt>
    </div>
  );
};

const FaqCard = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const faqBkgr = props.bkgrs ? faqBkgrs[props.bkgrs[props.id - 1] - 1] : null;

  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
    backgroundImage: faqBkgr ? `url(${faqBkgr})` : undefined,
  };

  const faqItem = faqData[props.id - 1];

  return (
    <div
      className="bg-darkpurp max-w-lg lg:w-[445px] lg:h-[280px] bg-cover bg-center"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="p-5 h-full">
        <div className="h-full bg-black/40 p-3 flex flex-col justify-center">
          <p className="mb-2 text-xl">{faqItem.question}</p>
          <p dangerouslySetInnerHTML={{ __html: faqItem.answer }}></p>
        </div>
      </div>
    </div>
  );
};

function Faq() {
  const numFaq = faqData.length;
  const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
  const [faqItems, setFaqItems] = useState(faqIds);
  const [randomFaqBkgrs, setRandomFaqBkgrs] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [prevSolved, setPrevSolved] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const randArray = Array.from({ length: numFaq }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setRandomFaqBkgrs(randArray);
    const correct = faqIds.toSorted(
      (a, b) => randArray[a - 1] - randArray[b - 1]
    );
    setCorrectOrder(correct);
  }, []);

  useEffect(() => {
    if (
      !prevSolved &&
      JSON.stringify(faqItems) === JSON.stringify(correctOrder)
    ) {
      confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 1 },
        startVelocity: 75,
        colors: ["#65FF96", "#43DDFF", "#2A2AFF", "#FF4387"],
      });
      setPrevSolved(true);
    }
  }, [faqItems, correctOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="p-5 gap-8 inter grid lg:grid-cols-2">
      {screenWidth > 1024 ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={faqItems}>
            {faqItems.map((id) => (
              <FaqCard id={id} key={id} bkgrs={randomFaqBkgrs} />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        faqItems.map((id) => <FaqCard id={id} key={id} />)
      )}
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFaqItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

const HeroScroll = () => {
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
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 5) / 20 : 0
            }px)`,
          }}
        >
          <img
            src={billboard}
            alt="Billboard"
            className="w-full h-auto mt-[5%]"
          />
          <img
            src={title}
            alt="Counterspell"
            className="absolute h-auto top-[10%] w-[70%] scale-[70%] right-[15%]"
          />
          <img
            src={smoke}
            alt="Smoke"
            className="absolute h-auto top-[0%] w-full scale-[110%] translate-x-[9%] hue-rot"
          />
          {/*<img
            src={sparks}
            alt="Sparks"
            className="absolute z-10 h-auto top-[5%] w-full scale-[110%]"
          />*/}
          <div className="flex justify-center text-center items-center">
            <div className="z-50 absolute top-[39%] text-[13px] xs:text-[15px] sm:text-[18px] 2xl:text-[32px] tracking-wide leading-[18px] xs:leading-[25px] sm:leading-[30px] 2xl:leading-[50px]">
              <p class="text-[#CFD8ED] retro">
                HACK CLUB'S BEGINNER FRIENDLY GAME JAM
              </p>
              <p class="text-pink retro text-[13px] xs:text-[15px] sm:text-[18px] 2xl:text-[32px] mt-2">
                NOVEMBER 9-10, 2024, IN 200+ CITIES
              </p>
              <div className="flex justify-center items-center h-full">
                <img className="w-12 h-auto mt-24 bobbing" alt="" src={down} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="translate-y-[35vw] md:translate-y-[200px] translate-x-[50vw] 2xl:translate-x-[120vw] scale-[300%] md:scale-[250%] 2xl:scale-[350%] -z-50">
        <img
          className="absolute bottom-0 bg-no-repeat -z-10 -mb-[60px] 2xl:-mb-[20px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 1) / 20 : 0
            }px)`,
          }}
          src={bg1}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-20 -mb-[45px] 2xl:-mb-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 2) / 20 : 0
            }px)`,
          }}
          src={bg2}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-30 -mb-[25px] 2xl:mb-0 2xl:bottom-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 3) / 20 : 0
            }px)`,
          }}
          src={bg3}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-40 2xl:bottom-[40px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 4) / 20 : 0
            }px)`,
          }}
          src={bg4}
          alt=""
        />
      </div>
    </>
  );
};
