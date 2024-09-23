import "../App.css";
import React, { useEffect, useState } from "react";
import Banner from "@hackclub/banner";

import billboard from "../art/billboard.png";
import title from "../art/title.png";
import smoke from "../art/smoke.gif";
import down from "../art/down.png";

import bg1 from "../art/hero/bg1.png";
import bg2 from "../art/hero/bg2.png";
import bg3 from "../art/hero/bg3.png";
import bg4 from "../art/hero/bg4.png";
import bg5 from "../art/hero/bg5.png";

import breakline from "../art/breakline.png";

export default function Hero() {
  return (
    <>
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

        <HeroScroll />

        <img src={breakline} alt="" className="w-full -mt-[35%] z-10 -mb-2" />
      </div>
      </>
  );
}

function HeroScroll() {
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
