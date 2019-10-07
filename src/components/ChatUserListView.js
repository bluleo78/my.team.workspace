import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  myAvatar: {
    backgroundColor: 'lime',
  },
});


class ChatUserListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      currentUser, users, onSelectUser,
      classes,
    } = this.props;

    function handleSelectListItem(e) {
      onSelectUser(e.currentTarget.dataset.id, users);
    }

    const userListItems = users
      .map((user) => {
        const isMe = currentUser && currentUser.name === user.name;
        return (
          <ListItem key={user.name} onClick={handleSelectListItem}>
            <ListItemAvatar>
              <Avatar className={isMe ? classes.myAvatar : null}>
                {isMe ? <AccountCircleIcon /> : <PersonIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={isMe ? 'Me' : user.name} />
          </ListItem>
        );
      });

    return (
      <Container>
        <List>
          {userListItems}
        </List>
      </Container>
    );
  }
}

ChatUserListView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onSelectUser: PropTypes.func,
  classes: PropTypes.shape({
    myAvatar: PropTypes.string,
  }).isRequired,
};

ChatUserListView.defaultProps = {
  currentUser: null,
  users: [],
  onSelectUser: () => null,
};

export default withStyles(styles)(ChatUserListView);
