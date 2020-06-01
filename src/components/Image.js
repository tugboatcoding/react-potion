import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  border-radius: 1px;
`;

const ImageComponent = ({ src, ...props }) => {
  return (
    <Image src={src} {...props} />
  );
};

export default ImageComponent;
