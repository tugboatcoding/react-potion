import React from 'react';
import { Flex as BaseFlex } from 'rebass/styled-components';

const Flex = (props) => (
  <BaseFlex
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

export default Flex;
