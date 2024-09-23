export default function Locations() {
  return (
    <div className="neuebit py-24 px-5">
      <div className="flex justify-center items-center text-center">
        <p className="text-6xl mb-4">
          Happening simultaneously in{" "}
          <span className="text-pink">50 different cities</span>, including:
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
  );
}
