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
  })
  .add('Underline', () => {
    return (
      <>
        <div>
          <Link className="underline" href="https://google.com">
            Google
          </Link>
        </div>
        <div>
          <Link href="https://google.com">
            <span style={{ marginRight: 8 }}>🔎</span>
            <span className="underline">Google</span>
          </Link>
        </div>
      </>
    );
  });
