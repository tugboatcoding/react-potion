import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('Default', () => {
    return (
      <>
        <Checkbox label="To-do list item" />
      </>
    );
  });
