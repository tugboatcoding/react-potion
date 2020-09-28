import React from 'react';
import styled from 'styled-components';

const PageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  height: 78px;
  width: 78px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: -42px;
  margin-left: 3px;
  margin-bottom: 0px;
  align-self: flex-start;

  line-height: 1.1;
  font-size: 78px;

  z-index: 1;
`;

const Icon = styled.span`
  font-family: "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols;
  line-height: 1em;
`;

const PageIconComponent = ({ children, ...props }) => (
  <PageIcon className="react-potion-pageIcon" {...props}>
    <Icon role="image" aria-label={children}>
      {children}
    </Icon>
  </PageIcon>
);

export default PageIconComponent;
