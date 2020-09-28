import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: rgb(55, 53, 47);
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: none;
  .underline, &.underline {
    text-decoration: underline;
  }
`;

const LinkComponent = ({ href, ...props }) => (
  <Link className="react-potion-link" href={href} {...props} />
);

export default LinkComponent;
