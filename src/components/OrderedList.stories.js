import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderedList from './OrderedList';
import ListItem from './ListItem';

storiesOf('OrderedList', module)
  .add('Default', () => (
    <>
      <OrderedList>
        <ListItem>List item #1</ListItem>
        <ListItem>List item #2</ListItem>
        <ListItem>List item #3 <a href="/">with link</a></ListItem>
      </OrderedList>
    </>
  ));
