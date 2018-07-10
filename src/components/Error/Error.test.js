import React from 'react';
import Error from '../Error';
import { shallow } from 'enzyme';

describe('<Error />', () => {
  test('should be rendered', () => {
    expect(shallow(<Error />)).toHaveLength(1);
  });

  test('should display an error message when `hasError` state become true', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper.find('h2')).toHaveLength(0);
    wrapper.setState({ hasError: true });

    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
