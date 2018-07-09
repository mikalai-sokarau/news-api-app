import React from 'react';
import Button from '../Button';
import { mount, shallow } from 'enzyme';

describe('<Button/>', () => {
  test('should render a name', () => {
    const wrapper = shallow(<Button buttonName="My awesome button" />);
    
    expect(wrapper.props().children).toEqual('My awesome button');
  });

  test('clickHandler should work', () => {
    const callback = jest.fn();
    const wrapper = mount(<Button clickHandler={callback} />);

    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);

    wrapper.simulate('click');
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
