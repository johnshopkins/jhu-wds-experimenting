import React, { Children } from 'react';
import compileClasses from '../lib/compileClasses';

export default ({ children, ...props }) =>
  <div className={compileClasses(['story-container'], props)}>
    {Children.map(children, child => child)}
  </div>
