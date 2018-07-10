import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleNews from './index';

describe('<SingleNews />', () => {
  const fakeItem = { urlToImage: './fake', title: 'fake', source: { name: 'fake' } };

  test('should be rendered', () => {
    expect(
      shallow(
        <SingleNews
          checked
          item={fakeItem}
          removeNewsFromFavorite={() => {}}
          addNewsToFavorite={() => {}}
        />
      )
    ).toMatchSnapshot();
  });

  test('should render `removeNewsFromFavorite` if pass `checked = true`', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <SingleNews
        checked
        item={fakeItem}
        removeNewsFromFavorite={callback}
        addNewsToFavorite={() => {}}
      />
    );

    wrapper.find('ThemeProvider').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
    wrapper.find('ThemeProvider').simulate('click');
    wrapper.find('ThemeProvider').simulate('click');
    expect(callback).toHaveBeenCalledTimes(3);
  });

  test('should render `addNewsToFavorite` if pass `checked = false`', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <SingleNews
        checked={false}
        item={fakeItem}
        removeNewsFromFavorite={() => {}}
        addNewsToFavorite={callback}
      />
    );

    wrapper.find('ThemeProvider').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
    wrapper.find('ThemeProvider').simulate('click');
    wrapper.find('ThemeProvider').simulate('click');
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
