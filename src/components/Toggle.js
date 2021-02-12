import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Box from './Box';
import toggle from '../assets/images/toggle.png';

const Outer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Toggle = ({ className, children }) => (
  <Outer className={className ? `${className} react-potion-toggle` : 'react-potion-toggle'}>
    <Flex>
      <Box width="22px" height="24px" pl="5px" pr="8px" mr="2px">
        <img alt="Toggle" src={toggle} height="14" />
      </Box>
      <div>
        {children}
      </div>
    </Flex>
  </Outer>
);

export default Toggle;
