import React from 'react';
import { Box as BaseBox } from 'rebass/styled-components';

const Box = (props) => (
  <BaseBox
    className="react-potion-box"
    {...props}
    theme={{
      breakpoints: [
        '414px',
        '768px',
        '1024px',
        '1280px',
        '1920px',
      ],
      space: [],
    }}
  />
);

export default Box;
