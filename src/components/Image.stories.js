import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module)
  .add('Default', () => (
    <>
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width="280px"
      />
    </>
  ))
  .add('Broken image', () => (
    <>
      <Image
        src="https://www.blahblahblah-bogusbogusbogus.com"
        width="280px"
      />
    </>
  ));
