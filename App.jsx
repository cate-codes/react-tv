import { useState } from "react";
import { shows } from "./shows/data";
import ShowSelection from "./ShowSelection";
import ShowDetails from "./ShowDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
