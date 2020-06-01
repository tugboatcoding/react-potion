import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module)
  .add('Default', () => {
    return (
      <>
        <Link href="https://google.com">
          Google
        </Link>
      </>
    );
  });
