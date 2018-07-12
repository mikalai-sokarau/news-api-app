import React from 'react';
import { SidePanel } from './index';
import { shallow } from 'enzyme';

describe('<SidePanel />', () => {
  test('should be rendered', () => {
    expect(shallow(<SidePanel getNewsFrom={() => {}} />)).toMatchSnapshot();
  });
});
