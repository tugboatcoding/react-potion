import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: rgba(55, 53, 47, 0.6);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  padding-top: 6px;
  padding-bottom: 6px;
`;

const Caption = ({ children }) => (
  <Outer className="react-potion-caption">
    {children}
  </Outer>
);

export default Caption;
