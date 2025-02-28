import React, { Children } from 'react';
import compileClasses from '../../shared/js/lib/compileClasses';

export default ({ children, href = '#', style = 'default', ...props }) => {

  const componentClasses = [];

  if (style && style !== 'default') {
    componentClasses.push(`style-${style}`);
  }

  return (
    <a className={compileClasses(componentClasses, props)} href={href} {...props}>
      {Children.map(children, child => child)}
    </a>
  );
};
