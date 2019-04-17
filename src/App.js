import React, {Component} from 'react';
import ColorPicker from './components/color-picker/ColorPicker';
import './reset.css';
import './App.css';

const colors = [
  {
    label: 'red',
    code: '#FF0000'
  },
  {
    label: 'yellow',
    code: '#FFFF00'
  },
  {
    label: 'green',
    code: '#008000'
  },
  {
    label: 'blue',
    code: '#0000FF'
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPicker colors={colors}/>
      </div>
    );
  }
}

export default App;
