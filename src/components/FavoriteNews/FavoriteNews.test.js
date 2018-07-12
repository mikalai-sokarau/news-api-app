import React from 'react';
import { shallow } from 'enzyme';
import FavoriteNews from './index';

describe('FavoriteNews', () => {
  test('should render a Message component if news array is empty', () => {
    const wrapper = shallow(
      <FavoriteNews
        news={[]}
        buttonName="buttonName"
        messageText="messageText"
        buttonClickHandler={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Message')).toHaveLength(1);
    expect(wrapper.find('SingleNews')).toHaveLength(0);
  });

  test('should render news, if they are exist', () => {
    const fakeNews = [
      { data: { url: '/fake1' } },
      { data: { url: '/fake2' } },
      { data: { url: '/fake3' } }
    ];
    const wrapper = shallow(<FavoriteNews news={fakeNews} iconClickHandler={() => {}} />);

    expect(wrapper.find('Message')).toHaveLength(0);
    expect(wrapper.find('SingleNews')).toHaveLength(3);
  });
});
