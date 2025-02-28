import React from 'react';
import { ContentToggle, Toggle } from '../../../components/ContentToggle/ContentToggle.html';
import Icon from '../../../components/Icon/Icon.html';
import Searchbox from '../../../components/Searchbox/Searchbox.html';

export default () => {
  return (
    <ContentToggle>
      <Toggle
        aria-controls="jhu-searchbox"
        open={<Icon name="magnifying-glass" aria-label="Open search" />}
        close={<Icon name="xmark" aria-label="Close search" />}
        toggleOn="click"
      />
      <Searchbox id="jhu-searchbox" data-controlled="true" />
    </ContentToggle>
  );
}
