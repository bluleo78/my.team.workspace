import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ChatInputView.module.scss';

const cx = classNames.bind(styles);

class ChatInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', emotion: null, ...props.initialState };
  }


  handleChangeInput=(e) => {
    this.setState({ text: e.target.value });
  }


  handleClickEnterButton=() => {
    const { currentUser, onSubmitMessage } = this.props;
    const { text, emotion } = this.state;
    this.setState({ text: '' });
    onSubmitMessage(currentUser.name, text, emotion);
  }


  render() {
    const { text } = this.state;

    return (
      <div className={cx('view')}>
        <input
          className={cx('input')}
          type="text"
          value={text}
          onChange={this.handleChangeInput}
        />
        <div className={cx('btn')}>
          <button type="submit" onClick={this.handleClickEnterButton}>Enter</button>
        </div>
      </div>
    );
  }
}


ChatInputView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  initialState: PropTypes.shape({
    text: PropTypes.string,
    emotion: PropTypes.string,
  }),
  onSubmitMessage: PropTypes.func,
};

ChatInputView.defaultProps = {
  currentUser: {},
  initialState: {},
  onSubmitMessage: () => null,
};

export default ChatInputView;
