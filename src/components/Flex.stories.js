import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box';
import Flex from './Flex';
import Text from './Text';

storiesOf('Flex', module)
  .add('Default', () => {
    return (
      <>
        <Flex marginLeft={4}><Text>Left margin Flex</Text></Flex>
        <Flex padding={4}><Text>Padded Flex</Text></Flex>
        <Flex flexDirection={['column','column', 'row']}>
          <Box marginRight={8}>
            <Text>Column in mobile</Text>
          </Box>
          <Text>Row in desktop</Text>
        </Flex>
        <Flex padding={['14px', '24px', '32px', '48px', '72px']}><Text>Responsive padded Flex</Text></Flex>
      </>
    );
  });
