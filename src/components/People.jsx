import { useState } from "react";
import { useQuery } from "react-query";
import Person from "./Person"
import {fetchData } from "../Api/starwarsApi"
function People() {

const [page ,setPage]=useState(1);
  const { data, status } = useQuery(["people",page], fetchData);
  return (
    <div className="wrap">
      <h1>People</h1>
      <button onClick={()=>setPage(1)}>page 1 </button>
      <button onClick={()=>setPage(2)}>page 2 </button>
      <button onClick={()=>setPage(3)}>page 3 </button>
      {status === "error" && <div> Fetch data error </div>}
      {status === "loading" && <div> Loading... </div>}
      {status === "idle" && <div> Repeat</div>}
      {status === "success" && <div> {
        data.results.map(function(person){
            return(
                <Person person = {person}/>
            )
        })
      }</div>}
    </div>
  );
}

export default People;
