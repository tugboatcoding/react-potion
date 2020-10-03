import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 19px;
  line-height: 1.5;
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  border-left: 3px solid currentcolor;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 5px;
  margin-bottom: 7px;
`;

const Quote = ({ children }) => (
  <Outer className="react-potion-quote">
    {children}
  </Outer>
);

export default Quote;
