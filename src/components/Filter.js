import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

class Filter extends React.Component {

  render() {
    const { user } = this.context;

    return (
      <div className="filter">
        <ul className="list-group">
          <IndexLink className="list-group-item" activeClassName="active" to="/">
            Feed
          </IndexLink>
          <Link className="list-group-item" activeClassName="active" to={"/users/" + user.id}>
            My Tweets
          </Link>
        </ul>
      </div>
    );
  }

}

Filter.contextTypes = {
  user: PropTypes.object.isRequired
};

export default Filter;
