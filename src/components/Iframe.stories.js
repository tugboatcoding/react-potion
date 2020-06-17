import React from 'react';
import { storiesOf } from '@storybook/react';
import Iframe from './Iframe';

storiesOf('Iframe', module)
  .add('Default', () => {
    return (
      <>
        <Iframe src="https://mlb.com" width="100%" height="700"></Iframe>
      </>
    );
  });
