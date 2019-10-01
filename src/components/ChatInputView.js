import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChatInputView.module.scss';


class ChatInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', emotion: null, ...props.initialState };
  }


  handleChangeInput=(e) => {
    this.setState({ text: e.target.value });
  }


  handleClickEnterButton=() => {
    const { onSubmitMessage } = this.props;
    const { text, emotion } = this.state;
    this.setState({ text: '' });
    onSubmitMessage(text, emotion);
  }


  render() {
    const { text } = this.state;

    return (
      <div className={styles.view}>
        <input
          className={styles.view__input}
          type="text"
          value={text}
          onChange={this.handleChangeInput}
        />
        <div className={styles.view__btn}>
          <button type="submit" onClick={this.handleClickEnterButton}>Enter</button>
        </div>
      </div>
    );
  }
}


ChatInputView.propTypes = {
  initialState: PropTypes.shape({
    text: PropTypes.string,
    emotion: PropTypes.string,
  }),
  onSubmitMessage: PropTypes.func,
};

ChatInputView.defaultProps = {
  initialState: {},
  onSubmitMessage: () => null,
};

export default ChatInputView;
