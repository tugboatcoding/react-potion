import React from 'react';
import styled from 'styled-components';
import checkedImg from '../assets/images/checked.png';

const Outer = styled.div`
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Inner = styled.div`
  ${({ checked }) => {
    if (checked) {
      return `
        white-space: pre-wrap;
        word-break: break-word;
        color: rgb(55, 53, 47);
        text-decoration: line-through;
        opacity: 0.375;
      `;
    }
    return '';
  }}
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
const CheckedSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 2px solid #2EABDC;
  margin-right: 4px;
  background-color: #2EABDC;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
`;

const CheckboxComponent = ({ checked, label, children }) => (
  <Outer className="react-potion-checkbox">
    <SquareOuter>
      {!checked && <Square />}
      {checked && <CheckedSquare><img alt="Checked" src={checkedImg} height="8.5" /></CheckedSquare>}
    </SquareOuter>
    <Inner>
      {!Array.isArray(children) && typeof children !== 'string' && <Label>{typeof label === 'string' ? label : null}</Label>}
      {!Array.isArray(children) && typeof children === 'string' && <Label>{children}</Label>}
      {Array.isArray(children) && children}
    </Inner>
  </Outer>
);

export default CheckboxComponent;
