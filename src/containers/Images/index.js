import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SingleImage from '../../components/SingleImage';
import FullScreenImage from '../../components/FullScreenImage';
import Input from '../../components/Input';
import { StyledContainer } from './style';
import { getImages } from '../../reducers';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 800;

export class Images extends Component {
  inputChange = text => {
    if (text) {
      this.props.getImages({ consumer: 'images', query: text.replace(/ /g, '+') });
    }
  };

  clickHandler = event => {
    if (event.target.tagName.toLowerCase() !== 'img') {
      this.props.history.goBack();      
    }
  };

  render = () => (
    <Switch>
      <Route
        path="/images/:id"
        render={({ match: { params: { id } } }) => {
          const image = this.props.images.find(item => item.id === +id);
          return (<FullScreenImage 
            src={image.largeImageURL} 
            alt={image.tags} 
            clickHandler={this.clickHandler}
          />);
        }}
      />
      <Route
        path="/images"
        exact
        render={() => (
          <div>
            <StyledContainer className="row">
              <Input
                onChangeHandler={debounce(this.inputChange, DEBOUNCE_DELAY)}
                placeholder="search"
              />
            </StyledContainer>
            <div className="row">
              {this.props.images.map(image => {
                return (
                  <SingleImage
                    key={image.id}
                    id={image.id}
                    url={image.webformatURL}
                    tags={image.tags}
                    user={image.user}
                  />
                );
              })}
            </div>
          </div>
        )}
      />
    </Switch>
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
