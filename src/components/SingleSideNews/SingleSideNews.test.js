import React from 'react';
import { shallow } from 'enzyme';
import SingleSideNews from '../SingleSideNews';

describe('<SingleSideNews/>', () => {
  test('render SingleSideNews', () => {
    const wrapper = shallow(<SingleSideNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
