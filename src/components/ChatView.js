import React from 'react';

import ChatHistoryView from '../containers/ChatHistoryView';
import ChatUserListView from '../containers/ChatUserListView';
import ChatInputView from '../containers/ChatInputView';

import styles from './ChatView.module.scss';


function ChatView() {
  return (
    <div className={styles.view}>
      <div className={styles.view__body}>
        <div className={styles.view__body__center}>
          <ChatHistoryView />
        </div>
        <div className={styles.view__body__right}>
          <ChatUserListView />
        </div>
      </div>
      <div className={styles.view__footer}>
        <ChatInputView />
      </div>
    </div>
  );
}


export default ChatView;
