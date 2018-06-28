import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getNewsFrom } from '../../reducers/index';
import SideNews from '../../components/SideNews';
import NewsSources from '../../components/NewsSources';
import { ASIDE_NEWS_SOURCES } from '../../common/constants';

class SidePanel extends PureComponent {
  componentDidMount() {
    const options = {
      consumer: 'sideNews',
      source: ASIDE_NEWS_SOURCES
    };
    this.props.getNewsFrom(options);
  }

  render = () => (
    <div className="col s4">
      <NewsSources source={this.props.source} />
      <SideNews getNewsFrom={this.props.getNewsFrom} sideNews={this.props.sideNews} />
    </div>
  );
}

const mapStateToProps = store => ({ sideNews: store.sideNews });

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(getNewsFrom(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);
