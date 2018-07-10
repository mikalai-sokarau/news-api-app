import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar/>', () => {
  test('className should be `navbar-fixed`', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
