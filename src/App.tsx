import {useState} from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import One from "./One";
import Two from "./two";
import Three from "./Three";

function App() {
  const [page, setPage] = useState(1);

  const Main = () => {
    if (page === 1) return <One  componentOneOnClick={()=>setPage(2)}/>;
    if (page === 2) return <Two  componentTwoOnClick={()=>setPage(3)}/>;
    if (page === 3) return <Three  componentThreeOnClick={()=>setPage(1)}/>;
    return null;
  };

  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />

      <div className="my-main-area">
        <Main />
      </div>
    </>
  );
}

export default App;
