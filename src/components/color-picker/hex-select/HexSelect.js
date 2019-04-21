import React from 'react';
import './hexSelect.css';

class HexSelect extends React.Component {
  state = {
    isOpen: false
  };

  clickHandle = (color) => {
    this.props.onChange(color);
  };

  onOpen = () => {
    this.setState({
      isOpen: true
    }, () => {
      document.addEventListener('click', this.onClose);
    })
  };

  onClose = () => {
    this.setState({
      isOpen: false
    }, () => {
      document.removeEventListener('click', this.onClose);
    })
  };

  render() {
    const {isOpen} = this.state;
    const {colors, currentColor} = this.props;

    return (
      <div className="colors">
        <div className="color-handler" onClick={this.onOpen}>
          <div className="color-handler__icon" />
        </div>
        {isOpen ? (
          <div className="colors-dropdown">
            <ul className="colors-list">
              {colors.map((color, index) => {
                return (
                  <li className={`colors-list__item ${color.code === currentColor ? 'colors-list__item_selected' : ''}`}
                      key={index}
                      onClick={() => this.clickHandle(color.code)}
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
    )
  }
}

export default HexSelect;