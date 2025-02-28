export default (componentClasses = [], props = {}, componentClassesFirst = false) => {
  // compile user-passed classes into an array
  const classes = props.className !== undefined ? props.className.trim().replace(/\s{2,}/g, ' ').split(' ') : [];

  // add component-defined classes
  const method = !componentClassesFirst ? 'unshift' : 'push';
  classes[method](...componentClasses);

  // remove className from props to prevent overriding of class attribute
  delete props.className;

  // return classes, only if there are any
  return classes.length ? classes.join(' ') : undefined;
};
