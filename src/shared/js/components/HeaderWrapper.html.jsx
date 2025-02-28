import React, { Children } from 'react';
import SkipToMainContent from '../../../components/SkipToMainContent/SkipToMainContent.html';
import Wrapper from './Wrapper';

/** 
 * Why wrap the component using wrap()?
 * 
 * Without a wrapper element (even a fragment), storybook will only
 * render the first element, so we need to add a wrapper div. We use
 * the wrap() library because its wrapper div is removed in the
 * source code presented to users.
 * 
 * Example:
 * A component that returns this will only render "test1"
 * return (<><p>test</p><p>test2</p></>)
 * 
 * However, a component that returns this will only render both "test1" and "test2"
 * return (<div><p>test</p><p>test2</p></div>)
 */
export default ({ children }) => (
  <Wrapper>
    <SkipToMainContent key="0" />
    <header key="1">
      {Children.map(children, child => child)}
    </header>
  </Wrapper>
)
