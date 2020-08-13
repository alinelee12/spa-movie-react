import React, {useState} from "react";
import ModalMovie from "./ModalMovie";

function Modal() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (

    <div className="Modal">
        <button onClick={() => setIsModalVisible(true)}>Open</button>
        {isModalVisible ? <ModalMovie />: null}
    
    </div>
    );
  }
  
  export default Modal;