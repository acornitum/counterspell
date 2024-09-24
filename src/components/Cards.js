import { Tilt } from "react-next-tilt";

import hacker from "../art/cards/hacker.png";
import musician from "../art/cards/musician.png";
import artist from "../art/cards/artist.png";

export default function Cards() {
  return (
    <div className="flex flex-col justify-center text-center px-20 py-24 neuebit">
      <p className="text-6xl">
        <span className="text-blue">Artist</span>,
        <span className="text-green"> Musician </span> or
        <span className="text-pink"> Coder</span>?
      </p>
      <p className="text-6xl">Join one of the three guilds when you sign up!</p>
      <p className="text-3xl mb-8"></p>

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

      <div className="mt-6">
        <b class="neuebit text-4xl">
          Spend a weekend making video games with your friends at our
          <span class="text-pink"> beginner-friendly game jam</span>, where you
          make games and win prizes!
        </b>
      </div>
    </div>
  );
}
