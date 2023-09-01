import { Link } from "react-router-dom";
import "../App.css";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
function Standard(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="Std">
      <Link to={props.path}>
        <button className="Std-btn" onClick={scrollToTop}>
          {props.name}
        </button>
      </Link>
    </div>
  );
}
export default Standard;
