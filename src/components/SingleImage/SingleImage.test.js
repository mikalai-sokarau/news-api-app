import React from 'react';
import { shallow } from 'enzyme';
import SingleImage from '../SingleImage';

describe('<SingleImage/>', () => {
  test('render SingleImage', () => {
    const wrapper = shallow(<SingleImage/>);
    expect(wrapper).toMatchSnapshot();
  });
});
