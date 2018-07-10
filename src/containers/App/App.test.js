import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from '../App';

describe('<App/>', () => {
  const fakeRouter = {
    location: { pathname: '/favorite' },
    history: { push: () => {}, goBack: () => {} },
    favoriteNews: {},
    removeNewsFromFavorite: () => {}
  };

  test('should be rendered', () => {
    const wrapper = shallow(<App {...fakeRouter} />);
    expect(wrapper).toHaveLength(1);
  });
});
