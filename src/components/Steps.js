import apo1 from "../art/images/apo1.png";
import apo2 from "../art/images/apo2.png";
import apo3 from "../art/images/apo3.png";
import apo4 from "../art/images/apo4.png";
import apo5 from "../art/images/apo5.png";

export default function Steps() {
  return (
    <div className="flex flex-col justify-center text-center py-12 neuebit">
      <div className="m-5">
        <p className="text-6xl">Here's how Counterspell works:</p>
        <div className="flex justify-center mx-4 my-6">
          <div className="border-4 rounded-md border-pink flex flex-wrap items-center justify-center inter py-8 grow">
            <StepCard
              img={apo1}
              text="1. Sign up for a Counterspell Event in your city"
            />
            <StepCard
              img={apo2}
              text="2. Find a team of other teenagers at Counterspell"
            />
            <StepCard
              img={apo3}
              text="3. Start building your game (no experience needed)"
            />
            <StepCard
              img={apo5}
              text="4. Attend workshops, or talk to one of our mentors for help"
            />
            <StepCard
              img={apo4}
              text="5. Ship what you made and share it with the rest of the world!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="bg-pink rounded-sm">
      <div className="justify-center items-center flex flex-col ">
        <img
          src={props.img}
          alt="Steps"
          className="justify-center items-center flex flex-col"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "2px",
          }}
        />
      </div>

      <p className="my-2 mx-5 max-w-44">{props.text}</p>
    </div>
  );
}
