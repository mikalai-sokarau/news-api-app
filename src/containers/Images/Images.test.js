import React from 'react';
import { shallow } from 'enzyme';
import { Images } from '../Images';

describe('<Images/>', () => {
  test('getImages executed', () => {
    const mockedGetImages = jest.fn();
    const wrapper = shallow(<Images images={[]} getImages={mockedGetImages} />);

    wrapper.instance().inputChange('fake string');
    expect(mockedGetImages).toBeCalled();

    wrapper.instance().inputChange();
    expect(mockedGetImages).toBeCalled();
  });

  test('renders <SingleImage/> components according to passed props', () => {
    const fakeImagesArr = [{ largeImageURL: '1' }];
    const wrapper = shallow(<Images images={fakeImagesArr} />);

    expect(wrapper.find('SingleImage')).toHaveLength(1);

    fakeImagesArr.push({ largeImageURL: '2' });
    const wrapper2 = shallow(<Images images={fakeImagesArr} />);

    expect(wrapper2.find('SingleImage')).toHaveLength(2);
  });
});
