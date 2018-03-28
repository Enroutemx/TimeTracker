import React from 'react';
import LoginView from './screens/LoginView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<LoginView />).toJSON();
  expect(rendered).toBeTruthy();
});
