import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Default', () => {
    return (
      <>
        <Heading size={900}>Heading 900</Heading>
        <Heading size={800}>Heading 800</Heading>
        <Heading size={700}>Heading 700</Heading>
        <Heading size={600}>Heading 600</Heading>
      </>
    );
  });
