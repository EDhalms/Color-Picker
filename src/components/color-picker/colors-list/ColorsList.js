import React from 'react';
import './colorsList.css';

class ColorsList extends React.Component {

  state = {
    color: '#000'
  }

  clickHandle = (color) => {
    this.props.onChange(color);
  };

  render() {
    return (
      <div className="colors">
        <ul className="colors-list">
          {this.props.colors.map((color, index) => {
              return (
                <li className={`colors-list__color`}
                    key={index}
                    onClick={() => this.clickHandle(color.code)}
                >
                  <div className="colors-list__color-name">{color.label}</div>
                  <div className="colors-list__color-marker" style={{backgroundColor: this.state.color}}></div>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

export default ColorsList;