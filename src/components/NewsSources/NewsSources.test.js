import React from 'react';
import { shallow } from 'enzyme';
import NewsSources from './index';

describe('<NewsSources />', () => {
  test('className should be `collection`', () => {
    expect(shallow(<NewsSources />)).toMatchSnapshot();
  });
});
