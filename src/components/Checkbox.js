import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const SquareOuter = styled.div`
  padding: 4px;
`;

const Square = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #282828;
  margin-right: 4px;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
`;

const CheckboxComponent = ({ label }) => (
  <Outer className="react-potion-checkbox">
    <SquareOuter>
      <Square />
    </SquareOuter>
    <Label>{typeof label === 'string' ? label : null}</Label>
  </Outer>
);

export default CheckboxComponent;
