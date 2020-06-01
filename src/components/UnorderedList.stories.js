import React from 'react';
import { storiesOf } from '@storybook/react';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';

storiesOf('UnorderedList', module)
  .add('Default', () => {
    return (
      <>
        <UnorderedList>
          <ListItem>List item #1</ListItem>
          <ListItem>List item #2</ListItem>
        </UnorderedList>
      </>
    );
  });
