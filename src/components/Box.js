import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  ${(props) => {
    const {
      m,
      mx,
      my,
      mt,
      ml,
      mb,
      mr,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      p,
      px,
      py,
      pt,
      pl,
      pb,
      pr,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      display,
      flexDirection,
      alignItems,
      justifyContent,
    } = props;
    return `
      ${(m || my || mt || margin || marginY || marginTop) ? `margin-top: ${m || my || mt || margin || marginY || marginTop}px;` : ''}
      ${(m || mx || mr || margin || marginX || marginRight) ? `margin-right: ${m || mx || mr || margin || marginX || marginRight}px;` : ''}
      ${(m || my || mb || margin || marginY || marginBottom) ? `margin-bottom: ${m || my || mb || margin || marginY || marginBottom}px;` : ''}
      ${(m || mx || ml || margin || marginX || marginLeft) ? `margin-left: ${m || mx || ml || margin || marginX || marginLeft}px;` : ''}
      ${(p || py || pt || padding || paddingY || paddingTop) ? `padding-top: ${p || py || pt || padding || paddingY || paddingTop}px;` : ''}
      ${(p || px || pr || padding || paddingX || paddingRight) ? `padding-right: ${p || px || pr || padding || paddingX || paddingRight}px;` : ''}
      ${(p || py || pb || padding || paddingY || paddingBottom) ? `padding-bottom: ${p || py || pb || padding || paddingY || paddingBottom}px;` : ''}
      ${(p || px || pl || padding || paddingX || paddingLeft) ? `padding-left: ${p || px || pl || padding || paddingX || paddingLeft}px;` : ''}
      ${display === 'flex' ? 'display: flex;' : ''}
      ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
      ${alignItems ? `align-items: ${alignItems};` : ''}
      ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    `;
  }}
`;

const BoxComponent = (props) => {
  return (
    <Box {...props} />
  );
};

export default BoxComponent;
