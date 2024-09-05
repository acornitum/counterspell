import "./App.css";

function App() {
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
          <p className="text-8xl mb-12 text-mag">COUNTERSPELL</p>
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
          <div className="border-4 rounded-lg border-lightpurp flex flex-wrap items-center justify-center p-10 m-16 serif">
            <div className="bg-darkpurp rounded-lg m-4 p-5">fdfs</div>
            <div className="bg-darkpurp rounded-lg m-4 p-5">fdfs</div>
            <div className="bg-darkpurp rounded-lg m-4 p-5">fdfs</div>
            <div className="bg-darkpurp rounded-lg m-4 p-5">fdfs</div>
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
            
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
