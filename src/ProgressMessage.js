import React from 'react';
import './Progress.css';
import './ProgressMessage.css';

const ProgressMessage = props => {
  const chapterData = props.chapterData || {};
  return (
    <span className={'Progress-message Progress--' + chapterData.progress}>
      {chapterData.progressMessage}
    </span>
  );
};

export default ProgressMessage;
