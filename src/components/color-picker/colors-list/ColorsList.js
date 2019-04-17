import React from 'react';
import './colorsList.css';

class ColorsList extends React.Component {

  clickHandle = (color) => {
    this.props.onChange(color);
  };

  render() {
    return (
      <div className="color-list">
        <ul>
          {this.props.colors.map((color, index) => {
              return (
                <li key={index}
                    onClick={() => this.clickHandle(color.code)}
                >
                  {color.label}
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

export default ColorsList;