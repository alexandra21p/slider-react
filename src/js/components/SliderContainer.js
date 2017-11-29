import React from "react";
import RangeSlider from "./RangeSlider";

export default class SliderContainer extends React.Component {
    costructor() {
        super();
        this.state = {
            minimum: 0,
            maximum: 1000,
            currentValue: 100,
            width: 500,
        };
    }

    render() {
        return (
            <div className="slider-container" style={ { width: this.state.width } }>
                <RangeSlider
                    minimum={ this.state.minimum }
                    maximum={ this.state.maximum }
                    currentValue={ this.state.currentValue }
                />
            </div>
        );
    }
}
