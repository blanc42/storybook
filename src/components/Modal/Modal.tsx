import React, { useState } from "react";
import './Modal.scss'

const Modal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={()=>setShow(!show)} className="modal">Modal</div>
      {
        show && <div className="popup">
        This will popup
      </div>
      }
    </>
  );
};

export default Modal;
