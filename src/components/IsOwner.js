import React from 'react';
import PropTypes from 'prop-types';

class IsOwner extends React.Component {

  render() {
    const { tweet, children } = this.props;
    const { user } = this.context;

    if (tweet.data.user === user.id) {
      return children;
    }

    return null;
  }

}

IsOwner.propTypes = {
  tweet: PropTypes.object.isRequired
};

IsOwner.contextTypes = {
  user: PropTypes.object.isRequired
};

export default IsOwner;
