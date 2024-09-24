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
import artist from "./art/cards/artist.png";

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
import Hero from "./components/Hero";
import Organize from "./components/Organize";
import Locations from "./components/Locations";
import Cards from "./components/Cards";
import Steps from "./components/Steps";
import About from "./components/About";

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
      <Hero />

      <div className="relative mt-8 lg:-mt-32 2xl:-mt-64 3xl:-mt-96">
        <div class="absolute -bottom-4 left-0 right-0 top-0 -z-10 bg-dark border-t-8 border-lightpurp"></div>

        <About />

        <Organize />

        <Locations />

        <div class="border-t-4 border-pink border-dashed"></div>

        <Cards />

        <Steps />

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

      <div className="mt-4 p-6 bg-[#90A8E1] text-2xl neuebit">
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
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/acornitum/counterspell"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Site built by Hack Clubbers
          </a>
        </div>
      </div>

      <svg width="0" height="0" className="block">
        <filter id="grainy" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".5" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </svg>
    </div>
  );
}

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
