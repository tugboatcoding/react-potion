import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  white-space: pre;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 85%;
  tab-size: 2;
  padding: 30px 16px 30px 20px;
  min-height: 1em;
  color: rgb(55, 53, 47);
  line-height: 1.5;
  border-radius: 3px;
  background: rgb(247, 246, 243);
`;

const CheckboxComponent = ({ appearance, size, children }) => {
  return (
    <Outer appearance={appearance} size={size}>
      {children}
    </Outer>
  );
};

export default CheckboxComponent;
