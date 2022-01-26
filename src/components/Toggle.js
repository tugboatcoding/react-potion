import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Box from './Box';
import Text from './Text';
import toggle from '../assets/images/toggle.png';

const Outer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const ToggleElement = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: translateX(${({ open }) => (open ? -4 : 0)}px) rotate(${({ open }) => (open ? 90 : 0)}deg);
  transform-origin: center;
`;

const Toggle = ({ className, label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Outer className={className ? `${className} react-potion-toggle` : 'react-potion-toggle'}>
      <Flex>
        <ToggleElement open={open} onClick={() => {
          setOpen(!open);
        }}>
          <Box width="22px" height="24px" pl="5px" pr="8px" mr="2px">
            <img alt="Toggle" src={toggle} height="14" />
          </Box>
        </ToggleElement>
        <div>
          <div>
            {!open && label && (
              <Text {...label} />
            )}
          </div>
          <div>
            {open ? children : null}
          </div>
        </div>
      </Flex>
    </Outer>
  );
};

export default Toggle;
