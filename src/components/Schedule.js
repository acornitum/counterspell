export default function Schedule() {
    const schedule = [
        { time: "11:00 AM", event: "Doors open" },
        { time: "12:00 PM", event: "Opening ceremony" },
        { time: "12:30 PM", event: "Lunch" },
        { time: "1:00 PM", event: "Start working on your game!" },
        { time: "2:00 PM", event: "Gamedev workshop 1" },
        { time: "4:00 PM", event: "Activity 1" },
        { time: "4:00 PM", event: "Gamedev workshop 2" },
        { time: "6:00 PM", event: "Dinner" },
        { time: "8:00 PM", event: "Lightning talks" },
        { time: "12:00 AM", event: "Midnight Suprise" },
        { time: "8:00 AM", event: "Breakfast" },
        { time: "10:30 AM", event: "Game demos!" },
        { time: "12:00 PM", event: "Closing ceremony" },
    ]


  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col text-4xl lg:text-5xl w-full max-w-3xl lg:max-w-4xl space-y-2 lg:space-y-3 px-12">
            {schedule.map((item) => (
            <div className="flex">
                <p>{item.event}</p>
                <div className="grow border-b-4 border-dotted -translate-y-3 mx-4"></div>
                <p>{item.time}</p>
            </div>
            ))}
        </div>
        <table
          class="table-auto"
          className="hidden text-2xl xs:text-3xl sm:text-5xl text-left border-separate border-spacing-y-1 xs:border-spacing-y-4 border-4 border-pink border-dashed py-8 px-14"
        >
          <tbody>
            <tr>
              <td class="">Doors open </td>
              <td className="text-right">11:00 AM</td>
            </tr>
            <tr>
              <td>Opening ceremony</td>
              <td className="text-right">12:00 PM</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td className="text-right">12:30 PM</td>
            </tr>
            <tr>
              <td className="pr-24">Start working on your game!</td>
              <td className="text-right">1:00 PM</td>
            </tr>
            <tr>
              <td>Gamedev workshop 1</td>
              <td className="text-right">2:00 PM</td>
            </tr>
            <tr>
              <td>Activity 1</td>
              <td className="text-right">4:00 PM</td>
            </tr>
            <tr>
              <td>Gamedev workshop 2</td>
              <td className="text-right">4:00 PM</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td className="text-right">6:00 PM</td>
            </tr>
            <tr>
              <td>Lightning talks</td>
              <td className="text-right">8:00 PM</td>
            </tr>
            <tr>
              <td>Midnight Suprise</td>
              <td className="text-right">12:00 AM</td>
            </tr>
            <tr>
              <td>Breakfast</td>
              <td className="text-right">8:00 AM</td>
            </tr>
            <tr>
              <td>Game demos!</td>
              <td className="text-right">10:30 AM</td>
            </tr>
            <tr>
              <td>Closing ceremony</td>
              <td className="text-right">12:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
