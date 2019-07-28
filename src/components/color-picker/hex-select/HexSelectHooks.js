import React, { useState } from 'react';
import './hexSelect.css';

function RgbSelectHooks (props) {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandle = (color) => {
        props.onChange(color);
    };

    const onOpen = () => {
        setIsOpen(true);
        document.addEventListener('click', onClose);
    };

    const onClose = () => {
        setIsOpen(false);
        document.removeEventListener('click', onClose);
    };

    return(
        <div className="colors">
            <div className="color-handler" onClick={onOpen}>
                <div className="color-handler__icon" />
            </div>
            {isOpen ? (
                <div className="colors-dropdown">
                    <ul className="colors-list">
                        {props.colors.map((color, index) => {
                            return (
                                <li className={`colors-list__item ${color.code === props.currentColor ? 'colors-list__item_selected' : ''}`}
                                    key={index}
                                    onClick={() => clickHandle(color.code)}
                                >
                                    <div className="colors-list__item-name">{color.label}</div>
                                    <div className="colors-list__item-marker"
                                         style={{backgroundColor: color.code}}>&nbsp;</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default RgbSelectHooks;