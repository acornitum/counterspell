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
          <p className="text-8xl mb-4 text-green">Counterspell</p>
          <p className="text-3xl serif mb-4">
            Join 5000+ students in any of 250+ locations to create games
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center bg-gray-600 w-72 h-10 rounded-lg">
              <p className="serif">email placeholder</p>
            </div>
          </div>
          <p className="serif">November 9-10th, 2024 // in-person, worldwide</p>
        </div>
      </div>

      <div>
        <div className="m-5">
          <p>imagine what you'll create</p>
          <p className="serif">
            this fall, Hack Club is running its biggest hackathon yet: a game
            jam where over 5k teens across 250 locations will come together for
            12-24 hours to make games together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
