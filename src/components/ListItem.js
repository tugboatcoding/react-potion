import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding-left: 4px;
`;

const ListItemComponent = ({ children }) => {
  return (
    <ListItem>{children}</ListItem>
  );
};

export default ListItemComponent;
