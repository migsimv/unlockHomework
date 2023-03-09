import React from "react";
import { Link } from "react-router-dom";
import HiImage from "../assets/200.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" >
      <div className="headerContainer">
      <img src={HiImage} alt="example" />
        <p > WOULD YOU LIKE TO ASK A QUESTION? </p>
        <Link to="/QuestionForm">
          <button> ASK </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
