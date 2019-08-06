import React, {Component} from 'react';
import ColorPickerHooks from './components/color-picker/ColorPickerHooks';
import './reset.css';
import './App.css';

const colors = [
  {
    label: 'red',
    code: '#ff0000'
  },
  {
    label: 'yellow',
    code: '#ffff00'
  },
  {
    label: 'green',
    code: '#008000'
  },
  {
    label: 'blue',
    code: '#0000ff'
  },
];

class App extends Component {

  onColorPickerChange = (color) => {
    console.log('onColorPickerChange - ', color);
  };

  render() {
    return (
      <div className="App">
        <ColorPickerHooks
            value="#ff0000"
            onChange={this.onColorPickerChange}
            colors={colors}
        />
      </div>
    );
  }
}

export default App;
