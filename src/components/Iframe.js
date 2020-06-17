import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  border-radius: 1px;
  pointer-events: auto;
  background-color: rgb(247, 246, 245);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
`;

const IframeComponent = (props) => {
  return (
    <Iframe {...props} />
  );
};

export default IframeComponent;
