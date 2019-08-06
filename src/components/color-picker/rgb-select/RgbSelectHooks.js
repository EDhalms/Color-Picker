import React, {useState, useEffect, useRef} from 'react';
import './rgbSelect.css';

const RgbSelectHooks = (props) => {
    const [rgb, setRgb] = useState({
        red: 0,
        green: 0,
        blue: 0,
    });
    const [hex, setHex] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const dropdown = useRef(null);

    useEffect(() => {
        synchronizeWithPiker();
    }, [props.color]);

    useEffect(() => {
        if(isOpen) {
            document.addEventListener('click', onOutsideClick);
        }
        return () => {
            document.removeEventListener('click', onOutsideClick);
        }
    }, [isOpen]);


    const synchronizeWithPiker = () => {
        setHex(props.color);
        setRgb(hexToRgb(props.color));
    };

    const colorToHex = (color) => {
        const hex = Number(color).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const rgbToHex = (r, g, b) => {
        return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
    };

    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        } : {
            red: 255,
            green: 255,
            blue: 255
        };
    };

    const handleRange = (event, color) => {
        const newRgb = {...rgb, [color]: event.target.value};

        setRgb(newRgb);
        setHex(rgbToHex(rgb.red, rgb.green, rgb.blue));
    };

    const onSaveColor = () => {
        props.onChange(hex);
        onClose();
    };

    const onCancelColor = () => {
        synchronizeWithPiker();
        onClose();
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const onOutsideClick = (event) => {
        if (dropdown.current && !dropdown.current.contains(event.target)) {
            onClose();
        }
    };

    return(
        <div className="rgb-select">
            <div className="rgb-handler">
                <div className="rgb-color-view"
                     style={{backgroundColor: hex}}
                     onClick={onOpen}
                />
            </div>
            {isOpen ? (
                <div className="rgb-dropdown" ref={dropdown}>
                    <div className="rgb-panel">
                        <div className="panel-field">
                            <label className="panel-field__label">R</label>
                            <input
                                className="panel-field__input panel-field__input_red"
                                onChange={(event) => handleRange(event, 'red')}
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                value={rgb.red}
                            />
                        </div>
                        <div className="panel-field">
                            <label className="panel-field__label">G</label>
                            <input
                                className="panel-field__input panel-field__input_green"
                                onChange={(event) => handleRange(event, 'green')}
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                value={rgb.green}
                            />
                        </div>
                        <div className="panel-field">
                            <label className="panel-field__label">B</label>
                            <input
                                className="panel-field__input panel-field__input_blue"
                                onChange={(event) => handleRange(event, 'blue')}
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                value={rgb.blue}
                            />
                        </div>
                        <div className="panel-controls">
                            <button className="panel-controls__btn panel-controls__cancel"
                                    onClick={onCancelColor}
                            >cancel</button>
                            <button className="panel-controls__btn"
                                    onClick={onSaveColor}
                            >ok</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
};

export default RgbSelectHooks;