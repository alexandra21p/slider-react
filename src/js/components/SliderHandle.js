/* eslint react/prop-types: off */
import React from "react";

export default function SliderHandle( props ) {
    return (
        <div className="draggable" style={ { left: `${ props.left }px` } }>
            <div className="slider-value">
                {props.value}
            </div>
            <div className="slider-handle" />
        </div>
    );
}
