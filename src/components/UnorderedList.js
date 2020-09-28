import React from 'react';
import styled from 'styled-components';

const UnorderedList = styled.ul`
  font-size: 16px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding-inline-start: 24px;
`;

const UnorderedListComponent = ({ children }) => (
  <UnorderedList className="react-potion-ul">{children}</UnorderedList>
);

export default UnorderedListComponent;
