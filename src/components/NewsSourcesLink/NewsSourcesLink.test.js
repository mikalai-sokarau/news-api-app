import React from 'react';
import { shallow } from 'enzyme';
import NewsSourcesLink from '../NewsSourcesLink';

describe('<NewsSourcesLink/>', () => {
  test('render a Message', () => {
    const wrapper = shallow(
      <NewsSourcesLink
        item={{
          pathName: '/fakePath',
          shortName: 'fakeData'
        }}
        source="fakeData"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
