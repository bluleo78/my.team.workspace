import React from 'react';
import classNames from 'classnames/bind';

import ChatHistoryView from '../containers/ChatHistoryView';
import ChatUserListView from '../containers/ChatUserListView';
import ChatInputView from '../containers/ChatInputView';

import styles from './ChatView.module.scss';


const cx = classNames.bind(styles);


function ChatView() {
  return (
    <div className={cx('view')}>
      <div className={cx('body')}>
        <div className={cx('center')}>
          <ChatHistoryView />
        </div>
        <div className={cx('right')}>
          <ChatUserListView />
        </div>
      </div>
      <div className={cx('footer')}>
        <ChatInputView />
      </div>
    </div>
  );
}


export default ChatView;
