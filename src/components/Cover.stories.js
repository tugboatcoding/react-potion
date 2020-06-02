import React from 'react';
import { storiesOf } from '@storybook/react';
import Cover from './Cover';

storiesOf('Cover', module)
  .add('Default', () => {
    return (
      <>
        <Cover
          src="https://images.unsplash.com/photo-1589802787293-c7009d1fce33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </>
    );
  });
