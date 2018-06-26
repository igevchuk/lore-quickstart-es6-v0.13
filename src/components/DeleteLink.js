import React from 'react';
import PropTypes from 'prop-types';

class DeleteLink extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { tweet } = this.props;

    lore.dialog.show(function() {
      return lore.dialogs.tweet.destroy(tweet, {
        blueprint: 'optimistic',
        request: function(data) {
          return lore.actions.tweet.destroy(tweet).payload;
        }
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onClick}>
        delete
      </a>
    );
  }

}

DeleteLink.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default DeleteLink;
