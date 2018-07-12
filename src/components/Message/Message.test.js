import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('<Message/>', () => {
  test('render a Message', () => {
    expect(shallow(<Message />)).toMatchSnapshot();
  });
});
