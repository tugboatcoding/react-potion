import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';
import Text from './Text';

storiesOf('Toggle', module)
  .add('Default', () => (
    <>
      <Toggle label={<Text>Lorem ipsum</Text>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Toggle>
    </>
  ));
