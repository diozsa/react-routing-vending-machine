import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const Candies = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <h2>Drinks here! Last call!</h2>
        <Box>
            <h5>Sorry, out of stock.</h5>
            <Link exact to="/">Main Menu</Link>
        </Box>
    </div>
)

export default Candies;