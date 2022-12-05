import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

const VendingMachine = ({ title }) => (
    <div className="VendingMachine">
        <h1>{title}</h1>
        <h3>We apologize, this vending machine is waiting to be restocked...</h3>
        <Box>
            <Link exact to="/candies">Candies</Link>
            <Link exact to="/drinks">Drinks</Link>
            <Link exact to="/chips">Chips</Link>
        </Box>

    </div>
);

export default VendingMachine;