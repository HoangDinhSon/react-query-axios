import { useQuery } from "react-query";
import Planet from "./Planet";
import { useState } from "react";

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};
function Planets() {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", page], fetchPlanets);
  return (
    <div className="wrap">
      <h1>Planets</h1>
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        page 1{" "}
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        page 2{" "}
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        page 3{" "}
      </button>
      {status === "error" && <div> Fetch data error </div>}
      {status === "loading" && <div> Loading... </div>}
      {status === "idle" && <div> Repeat</div>}
      {status === "success" && (
        <div>
          {" "}
          {data.results.map(function (planet) {
            return <Planet key={planet.name} planet={planet} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Planets;
