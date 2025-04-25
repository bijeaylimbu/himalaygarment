import React from "react";
import "./Loader.css";
import { RotatingLines } from "react-loader-spinner";
const CricketBallLoader = () => (

    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />

);

export default CricketBallLoader;
