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
    if (event.target.tagName === 'DIV') {
      this.props.history.push('/images');
    }
  };

  render = () => (
    <Switch>
      <Route
        path="/images/:id"
        render={({ match: { params: { id } } }) => {
          const index = this.props.images.findIndex(item => item.id === +id);
          return (
            <FullScreenImage
              src={this.props.images[index].largeImageURL}
              alt={this.props.images[index].tags}
              clickHandler={this.clickHandler}
              back={index > 0 ? this.props.images[index - 1].id : null}
              forward={index < this.props.images.length - 1 ? this.props.images[index + 1].id : null}
            />
          );
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
