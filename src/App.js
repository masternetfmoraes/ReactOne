//import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid ">
        <p>Teste</p>
        <div class="btn-group">
          <a href="/" class="btn btn-primary active" aria-current="page">
            Home
          </a>
          <a href="sobre" class="btn btn-primary">
            Sobre
          </a>
          <a href="link" class="btn btn-primary">
            Link
          </a>
        </div>
      </div>
    </>
  );
}
