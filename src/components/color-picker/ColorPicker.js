import React, { useState, useEffect } from 'react';
import HexSelectHooks from './hex-select/HexSelect';
import RgbSelect from './rgb-select/RgbSelect';
import './colorPicker.css';

const ColorPicker = (props) => {
    const [color, setColor] = useState('');

    useEffect(() => {
        setColor(props.value);
    }, []);

    const onColorChange = (color) => {
        props.onChange(color);
        setColor(color);
    };

    return (
        <div className="color-picker">
            <div className="color-picker__container">
                <div className="selected-color-section">
                    <div className="selected-color-section__code">{color}</div>
                </div>
                <div className="rgb-section">
                    <RgbSelect
                        color={color}
                        onChange={onColorChange}
                    />
                </div>
                <div className="hex-section">
                    <HexSelectHooks
                        colors={props.colors}
                        currentColor={color}
                        onChange={onColorChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;