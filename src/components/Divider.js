import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
`;

const DividerComponent = (props) => (
  <Divider className="react-potion-divider" {...props} />
);

export default DividerComponent;
