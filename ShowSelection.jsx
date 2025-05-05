export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav>
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          href="#"
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
