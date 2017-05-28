import React from 'react';
import './Progress.css';
import './ProgressLabel.css';

const ProgressLabel = (props) => {
  const chapterData = props.chapterData || {};
  return (
    <span className={"Progress-label Progress--" + chapterData.progress}>{chapterData.progressLabel}</span>
  );
};

export default ProgressLabel;
