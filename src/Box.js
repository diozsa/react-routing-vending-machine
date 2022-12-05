import React from "react";
import "./Box.css";

const Box = ({ children }) => (
    <div className="Box">
        {children}
    </div>
);

export default Box;