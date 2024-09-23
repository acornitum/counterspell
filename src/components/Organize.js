import aboutbkgr from "../art/aboutbkgr.png";

import flare3 from "../art/flares/flare3.png";
import flare4 from "../art/flares/flare4.png";

import torch1 from "../art/flares/torch1.png";
import torch2 from "../art/flares/torch2.png";

export default function Organize() {
  return (
    <div class="pb-12 relative">
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

      <div className="absolute top-4 left-0 right-0">
        <div className="flex justify-center w-full ">
          <div className="flex max-w-6xl w-full">
            <img
              src={flare3}
              alt="Flare decoration #3"
              className="hidden md:block -z-10 w-[300px]"
            />
            <div className="grow"></div>
            <img
              src={flare4}
              alt="Flare decoration #3"
              className="hidden md:block -z-10 w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 left-0 right-0">
        <div className="flex justify-center w-full ">
          <div className="flex max-w-7xl w-full">
            <img
              src={torch1}
              alt="Torch decoration #1"
              className="hidden md:block bottom-0 left-0 -z-10 w-[200px]"
            />
            <div className="grow"></div>
            <img
              src={torch2}
              alt="Torch decoration #2"
              className="hidden md:block bottom-0 right-0 -z-10 w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
