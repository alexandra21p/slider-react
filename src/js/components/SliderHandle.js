import React from "react";

export default function SliderHandle( props ) {
    return (
        <div className="draggable" style={ { left: props.sliderOffset } }>
            <div className="slider-handle" />
        </div>
    );
}
