/* eslint react/prop-types: off, react/no-unused-state: off, react/no-did-mount-set-state: off */
import React from "react";
import SliderHandle from "./SliderHandle";

export default class RangeSlider extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            canMove: false,
        };

        this.setInitialCoordinates = this.setInitialCoordinates.bind( this );
    }

    componentDidMount() {
        const rangeContainer = document.querySelector( ".range-container" );
        const parentProperties = rangeContainer.getBoundingClientRect();
        const parentWidth = parseInt( parentProperties.width, 10 );
        const parentLeftOffset = parentProperties.left;

        this.setState( {
            parentWidth,
            parentLeftOffset,
        } );
    }

    setInitialCoordinates( evt ) {
        const { parentLeftOffset, parentWidth } = this.state;
        const positionX = evt.clientX;
        const sliderOffset = Math.min( Math.max( positionX - parentLeftOffset, 0 ), parentWidth );
        const updatedSliderValue = this.changeCurrentValue( sliderOffset );

        this.setState( {
            canMove: true,
            sliderOffset,
            currentValue: updatedSliderValue,
        } );
    }

    changeCurrentValue( leftOffset ) {
        const unitPerPixel = this.props.maximum / parseInt( this.state.parentWidth, 10 );
        return Math.round( leftOffset * unitPerPixel );
    }

    render() {
        const value = !this.state.currentValue ? this.props.initialValue : this.state.currentValue;

        return (
            <div className="slider-container">
                <div className="range-value">
                    <h2>min</h2>
                    <span className="min-value">{this.props.minimum}</span>
                </div>
                <div
                    className="range-container"
                    onMouseDown={ this.setInitialCoordinates }
                    role="button"
                    tabIndex="0"
                >
                    <SliderHandle
                        left={ this.state.sliderOffset }
                        value={ value }
                    />
                    <div className="progress-bar">
                        <span />
                    </div>
                </div>
                <div className="range-value">
                    <h2>max</h2>
                    <span className="max-value">{this.props.maximum}</span>
                </div>
            </div>

        );
    }
}
