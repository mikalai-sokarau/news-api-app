import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleImage from '../../components/SingleImage';
import Input from '../../components/Input';
import StyledContainer from './style';
import { getImages } from '../../reducers';
import debounce from 'lodash.debounce';

const DEBOUNCE_TIME = 800;

class Images extends Component {
  inputChange = text => {
    if (text) {
      this.props.getImages({ consumer: 'images', query: text.replace(/ /g, '+') });
    }
  };

  debouncedInputChange = debounce(this.inputChange, DEBOUNCE_TIME);

  render = () => (
    <div>
      <StyledContainer className="row">
        <Input onChangeHandler={this.debouncedInputChange} placeholder="search" />
      </StyledContainer>
      <div className="row">
        {this.props.images.map(image => (
          <SingleImage
            key={image.largeImageURL}
            url={image.webformatURL}
            fullSizeUrl={image.largeImageURL}
            tags={image.tags}
            user={image.user}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ images }) => ({ images });

const mapDispatchToProps = dispatch => ({
  getImages: options => dispatch(getImages(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
