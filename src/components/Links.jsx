import "../App.css";

function Links(props) {
  return (
    <a href={props.lnk} target="_blank" className="Links">
      <img src={props.img}></img>
      <p>{props.content}</p>
    </a>
  );
}
export default Links;
