import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleImage from '../../components/SingleImage';
import { getImages } from '../../reducers';
import StyledContainer from './style';
import debounce from 'lodash.debounce';

const DEBOUNCE_TIME = 800;

class Images extends Component {
  inputChange = text => {
    if (text) {
      this.props.getImages({ consumer: 'images', query: text.split(' ').join('+') });
    }
  };

  debouncedInputChange = debounce(this.inputChange, DEBOUNCE_TIME);

  render = () => (
    <div>
      <StyledContainer className="row">
        <div className="input-field">
          <input
            onChange={({ target: { value } }) => this.debouncedInputChange(value)}
            id="last_name"
            placeholder="search"
            type="text"
            className="validate"
          />
        </div>
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
