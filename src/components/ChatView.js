import React from 'react';

import ChatHistoryView from '../containers/ChatHistoryView';
import ChatUserListView from '../containers/ChatUserListView';
import ChatInputView from '../containers/ChatInputView';

import styles from './ChatView.module.scss';


function ChatView() {
  return (
    <div className={styles.view}>
      <div className={styles.body}>
        <div className={styles.center}>
          <ChatHistoryView />
        </div>
        <div className={styles.right}>
          <ChatUserListView />
        </div>
      </div>
      <div className={styles.footer}>
        <ChatInputView />
      </div>
    </div>
  );
}


export default ChatView;
