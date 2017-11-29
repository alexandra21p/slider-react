import React from "react";
import ReactDOM from "react-dom";

import SliderContainer from "./components/SliderContainer";

const firstObject = {
    containerName: ".custom-slider-container",
    sliderWidth: 500,
    minimumValue: 0,
    maximumValue: 500,
    firstHandleValue: 10,
    secondHandleValue: 350,
};

const app = document.getElementById( "app" );
ReactDOM.render( <SliderContainer />, app );
