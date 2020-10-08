import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  background-position: center;
  object-position: center;
  border-radius: 1px;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};` : '')}
`;

const ImageComponent = ({ src, ...props }) => (
  <Image alt="Image" className="react-potion-img" src={src} onError={(e) => { e.target.style.display = 'none'; }} {...props} />
);

export default ImageComponent;
