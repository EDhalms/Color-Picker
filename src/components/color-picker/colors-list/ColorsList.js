import React from 'react';
import './colorsList.css';

class ColorsList extends React.Component {
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
    return (
      <div className="colors">
        <div className="color-selection" onClick={this.onOpen}>
          <div className="color-selection__handler" />
        </div>
        {this.state.isOpen ? (
          <ul className="colors-list">
            {this.props.colors.map((color, index) => {
              return (
                <li className={`colors-list__color ${color.code === this.props.color ? 'colors-list__color_selected' : ''}`}
                    key={index}
                    onClick={() => this.clickHandle(color.code)}
                >
                  <div className="colors-list__color-name">{color.label}</div>
                  <div className="colors-list__color-marker"
                       style={{backgroundColor: color.code}}>&nbsp;</div>
                </li>
              )
            })}
          </ul>
        ) : null}

      </div>
    )
  }
}

export default ColorsList;