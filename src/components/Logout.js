import React from 'react';
import PropTypes from 'prop-types';
import auth from '../utils/auth';
import ShowLoadingScreen from './ShowLoadingScreen';

class Logout extends React.Component {

  componentDidMount() {
    const { router } = this.props;

    auth.deleteToken();
    router.push('/');
  }

  render() {
    return (
      <ShowLoadingScreen/>
    );
  }

}

Logout.propTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
