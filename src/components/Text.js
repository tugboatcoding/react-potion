import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Text = ({ className, children }) => (
  <Outer className={className ? `${className} react-potion-text` : 'react-potion-text'}>
    {children}
  </Outer>
);

export default Text;
