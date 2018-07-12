import React from 'react';
import { shallow } from 'enzyme';
import SideNews from './index';

describe('<SideNews />', () => {
  test('SingleSideNews should be rendered', () => {
    const fakeSideNews = [
      { url: '/fake1', title: 'fake1' },
      { url: '/fake2', title: 'fake2' },
      { url: '/fake3', title: 'fake3' }
    ];

    expect(
      shallow(<SideNews sideNews={fakeSideNews} />).find('SingleSideNews')
    ).toHaveLength(3);
  });
});
