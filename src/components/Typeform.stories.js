import React from 'react';
import { storiesOf } from '@storybook/react';
import Typeform from './Typeform';

storiesOf('Typeform', module)
  .add('Default', () => {
    return (
      <>
        <Typeform src="https://form.typeform.com/to/XYZ" width="100%" height="700px"></Typeform>
      </>
    );
  });
