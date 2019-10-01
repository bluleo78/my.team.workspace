import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  myCard: {
    backgroundColor: 'lime',
  },
  text: {
    fontSize: 14,
  },
  textReverse: {
    textAlign: 'right',
  },
  user: {
    marginBottom: 5,
  },
});

function UserMessage(props) {
  const {
    name, text, emotion, isMe,
  } = props;
  const classes = useStyles();

  const textMessage = (
    <Grid container direction="column" spacing={1} alignItems={isMe ? 'flex-start' : 'flex-end'}>
      <Grid item>
        <Typography className={classes.user} color="textSecondary">
          {name}
        </Typography>
      </Grid>
      <Grid container direction={isMe ? 'row' : 'row-reverse'}>
        <Grid item xs={7}>
          <Card className={classNames(classes.card, { [classes.myCard]: isMe })}>
            <CardContent className={classes.cardContent}>
              <Typography className={classNames(classes.text, { [classes.textReverse]: !isMe })} color="textSecondary" gutterBottom>
                {text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Grid>
  );

  const emotionMessage = (
    <Grid container spacing={3}>
      <Grid item>
        <Typography className={classes.pos} color="textSecondary">
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <EmojiEmotionsOutlinedIcon />
      </Grid>
    </Grid>
  );

  return (
    <div>
      {text && textMessage}
      {emotion === 'smile' && emotionMessage}
    </div>
  );
}


UserMessage.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  emotion: PropTypes.string,
  isMe: PropTypes.bool,
};

UserMessage.defaultProps = {
  text: null,
  emotion: null,
  isMe: false,
};

export default UserMessage;
