export default class BaseComponent {

  /**
   * The accepted arguments can take two forms:
   * 
   * - constructor(HTMLElement, settings = {})
   *   If the first argument is an HTMLElement, this element is set to this.element.
   *   If there is a second property and it is an object, that object's key/value
   *   pairs are set on the object via this[key] = value.
   * 
   * - constructor(settings = {})
   *   If the first argument is an object, that object's key/value pairs are set on
   *   the object via this[key] = value.
   */
  constructor() {

    if (arguments[0] instanceof HTMLElement) {
      this.element = arguments[0];

      if (typeof arguments[1] === 'object') {
        this.setClassProperties(arguments[1]);
      }

    } else if (typeof arguments[0] === 'object') {
      this.setClassProperties(arguments[0]);
    }
    
    this.bindMethods();
    this.classInit();
  }

  setClassProperties(properties) {
    for (const property in properties) {
      this[property] = properties[property];
    }
  }

  bindMethods() {
    this.init = this.init.bind(this);
    this.classInit = this.classInit.bind(this);
    this.teardown = this.teardown.bind(this);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);

    if (this.methodsToBind) {
      this.methodsToBind.forEach(method => {
        this[method] = this[method].bind(this);
      })
    }
  }

  init() {
    // used by classes extending BaseComponent
  }

  classInit() {
    this.init();
    this.addEventListeners();
  }

  addEventListeners() {
    
  }

  removeEventListeners() {
    
  }

  teardown() {
    this.removeEventListeners();
  }
}
