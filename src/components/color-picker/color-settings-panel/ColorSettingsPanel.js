import React from 'react';
import './colorSettingsPanel.css';

class ColorSettingsPanel extends React.Component {
  state = {
    rgb: {
      red: 0,
      green: 0,
      blue: 0,
    },
    hex: ''
  };

  componentDidMount() {
    this.setHex(this.props.color);
    this.setRgb(this.hexToRgb(this.props.color));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.color !== this.props.color) {
      this.setHex(this.props.color);
      this.setRgb(this.hexToRgb(this.props.color));
    }
  }

  setRgb = (rgb) => {
    this.setState({
      rgb
    })
  };

  setHex = (hex) => {
    this.setState({
      hex
    })
  };

  colorToHex = (color) => {
    const hex = Number(color).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  rgbToHex = (r, g, b) => {
    return "#" + this.colorToHex(r) + this.colorToHex(g) + this.colorToHex(b);
  };

  hexToRgb = (hex) => {
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

  handleRange = (event, color) => {
    const newRgb = {...this.state.rgb, [color]: event.target.value};

    this.setState({
      rgb: newRgb
    }, () => {
      this.setState({
        hex: this.rgbToHex(this.state.rgb.red, this.state.rgb.green, this.state.rgb.blue)
      })
    })
  };

  selectColorHandle = () => {
    this.props.onChange(this.state.hex);
  };

  render() {
    return (
      <div className="settings-panel">
        <div style={{backgroundColor: this.state.hex}}>{this.state.hex}</div>
        <div>
          <label>R
            <input
              onChange={(event) => this.handleRange(event, 'red')}
              type="range"
              min="0"
              max="255"
              step="1"
              value={this.state.rgb.red}
            />
          </label>
        </div>
        <div>
          <label>G
            <input
              onChange={(event) => this.handleRange(event, 'green')}
              type="range"
              min="0"
              max="255"
              step="1"
              value={this.state.rgb.green}
            />
          </label>
        </div>
        <div>
          <label>B
            <input
              onChange={(event) => this.handleRange(event, 'blue')}
              type="range"
              min="0"
              max="255"
              step="1"
              value={this.state.rgb.blue}
            />
          </label>
        </div>
        <div>
          <button>cancel</button>
          <button onClick={this.selectColorHandle}>ok</button>
        </div>
      </div>
    )
  }
}

export default ColorSettingsPanel;