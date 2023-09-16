// import { Fragment } from "react";
import SearchResult from "../HomePage/searchResult";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen shadow-md  backdrop-blur-sm z-50 transition-all duration-500 cursor-pointer"
      onClick={props.hide}
    />
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className="">
      {ReactDOM.createPortal(<Backdrop hide={props.hide} />, portalEl)}
      {ReactDOM.createPortal(
        <SearchResult items={props.searchItems} />,
        portalEl
      )}
    </div>
  );
};

export default Modal;
