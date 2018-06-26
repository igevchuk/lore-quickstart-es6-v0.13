import React from 'react';
import PropTypes from 'prop-types';
import PayloadStates from '../constants/PayloadStates';

class LoadMoreButton extends React.Component {

  render() {
    const {
      lastPage,
      onLoadMore,
      nextPageMetaField
    } = this.props;

    if(lastPage.state === PayloadStates.FETCHING) {
      return (
        <div className="footer">
          <div className="loader" />
        </div>
      );
    }

    if (!lastPage.meta[nextPageMetaField]) {
      return (
        <div className="footer" />
      );
    }

    return (
      <div className="footer">
        <button className="btn btn-default btn-lg" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    );
  }

}

LoadMoreButton.propTypes = {
  lastPage: PropTypes.object.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  nextPageMetaField: PropTypes.string.isRequired
};

export default LoadMoreButton;
