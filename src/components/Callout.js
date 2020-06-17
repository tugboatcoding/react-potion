import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
  padding: 16px 16px 16px 12px;
  display: flex;
  width: 100%;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background: rgba(235, 236, 237, 0.3);
  width: 100%;
`;

const Callout = ({ children }) => {
  return (
    <Outer>
      {children}
    </Outer>
  );
};

export default Callout;
