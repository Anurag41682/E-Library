import "../App.css";
import Standard from "./Standard";
import Footer from "./Footer";
function Navbar(props) {
  return (
    <div className="Nav">
      <Standard name="Home" path="/"></Standard>
      <Standard name="8th" path="/8th"></Standard>
      <Standard name="9th" path="/9th"></Standard>
      <Standard name="10th" path="10th"></Standard>
      <Standard name="11th" path="11th"></Standard>
      <Standard name="12th" path="12th"></Standard>
      <Footer></Footer>
    </div>
  );
}
export default Navbar;
