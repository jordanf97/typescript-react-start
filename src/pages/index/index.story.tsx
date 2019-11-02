import React from 'react';
import { storiesOf } from '@storybook/react';
import Index from './';

const notes = `
  # Landing Page
  This is a simple landing page to illustrate tailwindcss usage
`;

storiesOf('Pages', module)
  .add('Index', () => <Index />, {
    notes
  });