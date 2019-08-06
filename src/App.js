import React from 'react';
import ColorPicker from './components/color-picker/ColorPicker';
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

const App = () => {

  const onColorPickerChange = (color) => {
    console.log('onColorPickerChange - ', color);
  };

  return (
    <div className="App">
      <ColorPicker
          value="#ff0000"
          onChange={onColorPickerChange}
          colors={colors}
      />
    </div>
  );
};

export default App;
