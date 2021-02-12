import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('Default', () => (
    <>
      <Checkbox label="To-do list item" />
      <Checkbox checked>To-do list item</Checkbox>
    </>
  ));
