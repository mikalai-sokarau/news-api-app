import React from 'react';
import { shallow } from 'enzyme';
import { News } from './index';

describe('<News />', () => {
  const fakeNews = [{ url: 'url1' }, { url: 'url2' }, { url: 'url3' }];

  test('should be rendered', () => {
    expect(
      shallow(
        <News
          news={fakeNews}
          addNewsToFavorite={() => {}}
          favoriteNewsKeys={[]}
          getNewsFrom={() => {}}
        />
      )
    ).toMatchSnapshot();
  });

  test('callback should be executed when `componentDidMount` fires', () => {
    const callback = jest.fn();

    shallow(
      <News
        news={fakeNews}
        addNewsToFavorite={() => {}}
        favoriteNewsKeys={[]}
        getNewsFrom={callback}
      />
    );
    expect(callback).toHaveBeenCalled();
  });

  test('news array should be rendered as SingleNews components', () => {
    expect(shallow(
      <News
        news={fakeNews}
        addNewsToFavorite={() => {}}
        favoriteNewsKeys={[]}
        getNewsFrom={() => {}}
      />
    ).find('SingleNews')).toHaveLength(3);
  });
});
