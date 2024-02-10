import React, { useState } from 'react';
import Box from './Box';


const ColorPicker = () => {
    const[selectedColor, setSelectedColor] = useState('red')

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
};
    

    return (
        <div>
            <select
            id="colorPicker"
            onChange={handleColorChange}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="brown">brown</option>
          </select>
          <Box color={selectedColor}></Box>
        </div>
        
    );
};

export default ColorPicker;