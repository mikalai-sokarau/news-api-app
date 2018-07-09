import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {
  test('render an Input', () => {
    const wrapper = shallow(<Input />);
    
    expect(wrapper).toMatchSnapshot();
  });

  test('render props correctly', () => {
    const wrapper = shallow(<Input placeholder="hello" />);

    expect(wrapper.children().props().placeholder).toBe('hello');
  });

  test('callback works correctly', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Input onChangeHandler={callback} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', { target: { value: 'value' } });
    expect(callback).toBeCalledWith('value');
  });
});
