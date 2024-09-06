import "./App.css";

export default function App() {
  return (
    <div>
      <div
        class="landing"
        className="flex flex-col justify-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, #100F21, #100F21, #100F21, #443D87)",
        }}
      >
        <div className="text-center">
          <p className="text-8xl mb-4 text-mag">COUNTERSPELL</p>
          <p className="text-3xl inter mb-4 mx-4">
            Join 5000+ students in any of 250+ locations to create games
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center bg-gray-600 w-72 h-10 rounded-lg">
              <p className="inter">email placeholder</p>
            </div>
          </div>
          <p className="inter">November 9-10th, 2024 // in-person, worldwide</p>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center m-5 my-24">
        <p className="text-3xl pb-2">
          Calling all hackers, artists, and musicians!
        </p>
        <p className="text-3xl">
          This is a <span className="text-blue">game jam</span> where you can
        </p>
        <p className="text-3xl">choose your own adventure</p>
      </div>

      <div className="flex flex-col justify-center text-center my-64">
        <div className="m-5">
          <p className="mb-6 text-4xl">imagine what you'll create</p>
          <p className="inter text-lg max-w-lg mx-auto">
            This fall, Hack Club is running its biggest hackathon yet: a game
            jam where over 5k teens across 250 locations will come together for
            12-24 hours to make games together.
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
          <div className="flex items-center justify-center p-5 inter">
            <div className="bg-darkpurp rounded-lg p-5">
              <p>question! question!</p>
              <p>answer! answer!</p>
            </div>
            <Faq
              question="Am I eligible to participate in Counterspell?"
              answer="If you're 18 or under, yes, we are so excited to see you! If you're over 18 but still in high school, shoot us an email at counterspell@hackclub.com."
            />
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
      <p className="mb-2">{question}</p>
      <p>{answer}</p>
    </div>
  );
};
