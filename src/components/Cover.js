import React from 'react';
import styled from 'styled-components';

const Cover = styled.img`
  object-fit: cover;
  border-radius: 0px;
  width: 100%;
  height: 30vh;
  opacity: 1;
  object-position: center 50%;
`;

const CoverComponent = ({ src, ...props }) => (
  <Cover className="react-potion-cover" src={src} {...props} />
);

export default CoverComponent;
