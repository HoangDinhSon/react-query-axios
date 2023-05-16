import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { useState } from "react";
function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="App">
      <h1> Stars war infor </h1>
      <Navbar setPage={setPage} />
      <div className="contennt">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
