import React, { useState } from 'react';
import Button from '../../../components/Button/Button.html';
import Icon from '../../../components/Icon/Icon.html';

import './click-to-copy.scss';

export default (text, code = true) => {

  const [status, setStatus] = useState('copy');

  const copy = (e) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(text).then(() => {
      setStatus('success');
      setTimeout(() => setStatus('copy'), 1000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('copy'), 1000);
    });
  }

  const buttons = {
    copy: <Button style="incognito"><Icon name="copy" namespace="docs" onClick={copy} /></Button>,
    success: <Button style="incognito" variant="success"><Icon name="circle-check" namespace="docs" /></Button>,
    error: <Button style="incognito" variant="error"><Icon name="circle-xmark" namespace="docs" /></Button>,
  };

  return (
    <span className="click-to-copy">
      <a href="#" onClick={copy}>{code ? <code>{text}</code> : text}</a>
      {buttons[status]}
    </span>
  );
}
