import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";

//
export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>About</h1>
        <p>Texto sobre nós</p>
      </div>
    </>
  );
}
