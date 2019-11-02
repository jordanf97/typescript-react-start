import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.story\.tsx$/), module);

import '../src/assets/styles/tailwind.css';