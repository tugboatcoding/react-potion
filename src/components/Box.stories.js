import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box';
import Text from './Text';

storiesOf('Box', module)
  .add('Default', () => {
    return (
      <>
        <Box padding={32}><Text>Padded box</Text></Box>
      </>
    );
  });
