import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/>', () => {
  test('app should be rendered', () => {
    const store = createStore(() => ({}));
    const app = shallow(<App store={store} />);
    expect(app).toHaveLength(1);
  });
});
