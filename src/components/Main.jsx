import { Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import _8th from "./8th";
import _9th from "./9th";
import _10th from "./10th";
import _11th from "./11th";
import _12th from "./12th";
function Main() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/8th" element={<_8th />}></Route>
        <Route path="/9th" element={<_9th />}></Route>
        <Route path="/10th" element={<_10th />}></Route>
        <Route path="/11th" element={<_11th />}></Route>
        <Route path="/12th" element={<_12th />}></Route>
      </Routes>
    </div>
  );
}
export default Main;
