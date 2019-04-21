import React from 'react';
import HexSelect from './hex-select/HexSelect';
import RgbSelect from './rgb-select/RgbSelect';
import './colorPicker.css';

class ColorPiker extends React.Component {
  state = {
    color: '#000'
  };

  componentDidMount() {
    this.setState({
      color: this.props.colors[0].code
    })
  }

  onColorChange = (color) => {
    this.setState({
      color
    })
  };

  render() {
    return (
      <div className="color-picker">
        <div className="color-picker__container">
          <div className="selected-color-section">
            <div className="selected-color-section__code">{this.state.color}</div>
          </div>
          <div className="rgb-section">
            <RgbSelect
              color={this.state.color}
              onChange={this.onColorChange}
            />
          </div>
          <div className="hex-section">
            <HexSelect
              colors={this.props.colors}
              currentColor={this.state.color}
              onChange={this.onColorChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPiker;