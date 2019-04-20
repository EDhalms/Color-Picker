import React from 'react';
import './colorSettingsPanel.css';

class ColorSettingsPanel extends React.Component {
  state = {
    rgb: {
      red: 0,
      green: 0,
      blue: 0,
    },
    hex: '',
    isOpen: false
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

  onSaveColor = () => {
    this.props.onChange(this.state.hex);
    this.onClose();
  };

  onCancelColor = () => {
    this.setHex(this.props.color);
    this.setRgb(this.hexToRgb(this.props.color));
    this.onClose();
  };

  onOpen = () => {
    this.setState({
      isOpen: true
    }, () => {
      document.addEventListener('click', this.onOutsideClick);
    })
  };

  onClose = () => {
    this.setState({
      isOpen: false
    }, () => {
      document.removeEventListener('click', this.onOutsideClick);
    })
  };

  onOutsideClick = (event) => {
    console.log('event.target - ', event.target);
    console.log('this.dropdown - ', this.dropdown);
    if (this.dropdown && !this.dropdown.contains(event.target)) {
      this.setState({
        isOpen: false
      }, () => {
        document.removeEventListener('click', this.onOutsideClick);
      })
    }
  };

  render() {
    return (
      <div className="rgb-select">
        <div className="rgb-handler" onClick={this.onOpen}>
          <div className="rgb-color-view"
               style={{backgroundColor: this.state.hex}}
          ></div>
        </div>
        {this.state.isOpen ? (
          <div className="settings-panel" ref={element => this.dropdown = element}>
            <p>{this.state.hex}</p>
            <div className="panel-field">
              <label className="panel-field__label">R</label>
              <input
                className="panel-field__input panel-field__input_red"
                onChange={(event) => this.handleRange(event, 'red')}
                type="range"
                min="0"
                max="255"
                step="1"
                value={this.state.rgb.red}
              />
            </div>
            <div className="panel-field">
              <label className="panel-field__label">G</label>
              <input
                className="panel-field__input panel-field__input_green"
                onChange={(event) => this.handleRange(event, 'green')}
                type="range"
                min="0"
                max="255"
                step="1"
                value={this.state.rgb.green}
              />
            </div>
            <div className="panel-field">
              <label className="panel-field__label">B</label>
              <input
                className="panel-field__input panel-field__input_blue"
                onChange={(event) => this.handleRange(event, 'blue')}
                type="range"
                min="0"
                max="255"
                step="1"
                value={this.state.rgb.blue}
              />
            </div>
            <div className="panel-controls">
              <button className="panel-controls__btn panel-controls__cancel"
                      onClick={this.onCancelColor}
              >cancel</button>
              <button className="panel-controls__btn"
                      onClick={this.onSaveColor}
              >ok</button>
            </div>
          </div>
        ) : null}

      </div>
    )
  }
}

export default ColorSettingsPanel;