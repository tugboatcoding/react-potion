import React from 'react';
import { storiesOf } from '@storybook/react';
import Callout from './Callout';

storiesOf('Callout', module)
  .add('Default', () => {
    return (
      <>
        <Callout>Callout</Callout>
      </>
    );
  });
