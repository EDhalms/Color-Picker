import React, {useState, useEffect} from 'react';
import './rgbSelect.css';

const RgbSelectHooks = (props) => {
    const [rgb, setRgb] = useState({
        red: 0,
        green: 0,
        blue: 0,
    });
    const [hex, setHex] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>RgbSelectHooks</div>
    )
};

export default RgbSelectHooks;