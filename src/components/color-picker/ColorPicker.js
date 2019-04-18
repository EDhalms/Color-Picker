import React from 'react';
import ColorsList from './colors-list/ColorsList';
import ColorSettingsPanel from './color-settings-panel/ColorSettingsPanel';
import './colorPiker.css';

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
    console.log('onColorChange - ', color);
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
          <div className="color-view-section">
            <div className="color-view-section__icon" style={{backgroundColor: this.state.color}}></div>
          </div>
          <div className="color-selection">
            <div className="color-selection__handler"></div>
          </div>
        </div>

        <ColorSettingsPanel
          color={this.state.color}
          onChange={this.onColorChange}
        />

        <ColorsList
          colors={this.props.colors}
          color={this.state.color}
          onChange={this.onColorChange}
        />

      </div>
    )
  }

}

export default ColorPiker;