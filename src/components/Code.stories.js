import React from 'react';
import { storiesOf } from '@storybook/react';
import Code from './Code';

storiesOf('Code', module)
  .add('Default', () => {
    return (
      <>
        <Code>Code</Code>
      </>
    );
  });
