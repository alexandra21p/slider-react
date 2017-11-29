import React from "react";
import SliderHandle from "./SliderHandle";
/* eslint react/prop-types: off */
export default class RangeSlider extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            canMove: false,
        };

        this.setInitialCoordinates = this.setInitialCoordinates.bind( this );
    }

    setInitialCoordinates( evt ) {
        const positionX = evt.clientX;
        const offset = Math.min( Math.max( positionX - parentLeftOffset, 0 ), parentWidth );

        this.setState( {
            canMove: true,
        } );
    }
    render() {
        return (
            <div>
                <div className="range-value">
                    <h2>max</h2>
                    <span className="min-value">{this.props.minimum}</span>
                </div>
                <div
                    className="range-container"
                    onMouseDown={ this.setInitialCoordinates }
                    role="button"
                    tabIndex="0"
                >
                    <SliderHandle left={ this.state.sliderOffset } />
                    <div className="colored-background">
                        <span />
                    </div>
                </div>
                <div className="range-value">
                    <h2>max</h2>
                    <span className="max-value">{this.props.maximum}</span>
                </div>
                <div className="value-container">
                    <p>current value:</p>
                    <span className="value">{this.props.currentValue}</span>
                </div>
            </div>

        );
    }
}
