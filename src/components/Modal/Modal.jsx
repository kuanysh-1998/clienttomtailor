import React from "react";
import "./modal.scss";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../redux/modalSlice";
import Cart from "../Cart/Cart";

const Modal = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.modalSlice);
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => dispatch(setActive(false))}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        
      </div>
    </div>
  );
};

export default Modal;
