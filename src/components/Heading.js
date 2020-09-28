import React from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  color: rgb(55, 53, 47);
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
  font-family: inter, Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  cursor: text;
`;

const Heading2 = styled.h2`
  color: rgb(55, 53, 47);
  font-family: inter, Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  font-size: 1.875em;
  line-height: 1.3;
`;

const Heading3 = styled.h3`
  color: rgb(55, 53, 47);
  font-family: inter, Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.3;
`;

const Heading4 = styled.h4`
  color: rgb(55, 53, 47);
  font-family: inter, Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.3;
`;

const Heading = ({ size = 800, children }) => (
  <>
    {size === 900 && <Heading1 className="react-potion-h1">{children}</Heading1>}
    {size === 800 && <Heading2 className="react-potion-h2">{children}</Heading2>}
    {size === 700 && <Heading3 className="react-potion-h3">{children}</Heading3>}
    {size === 600 && <Heading4 className="react-potion-h4">{children}</Heading4>}
  </>
);

export default Heading;
