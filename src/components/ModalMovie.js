import React from "react";
 
 
 const ModalMovie = (props) => {
     const children = props;
    return (
    <div className="modal">
    <div className="container">
        <button className="close">
        close
        </button>
        <div className="content">{children}</div>
    </div>
    </div>
        )
};

export default ModalMovie;