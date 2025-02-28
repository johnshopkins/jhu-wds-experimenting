const tabbable = [
  'a[href]:not([href=""])',
  'area[href]:not([href=""])',
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  'audio',
  'video',
  '*[contenteditable]:not([contenteditable="false"])',
  '[tabindex="0"]',
].map(selector => `${selector}:not([tabindex="-1"])`);

const defaults = {
  allowOutsideClick: true,
  allowEscape: true,
}

export default class TrapTab {

  constructor(element, options = {}) {

    this.active = false;
    this.element = element;

    this.config  = { ...defaults, ...options };
    this.focusable = element.querySelectorAll(tabbable.join(','));

    this.focusedIndex = null;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.navigate = this.navigate.bind(this);

  }

  navigate(e) {

    const nextIndex = e.shiftKey ? this.focusedIndex - 1 : this.focusedIndex + 1;

    // figure out if we need to prevent default functionality
    let newIndex = false;
    if (nextIndex > this.focusable.length - 1) {
      newIndex = 0;
    } else if (nextIndex === -1) {
      newIndex = this.focusable.length - 1;
    }

    // only manually set the next focused item if it's either
    // the first or last item (restart the circular tab focus).
    if (newIndex !== false) {
      this.focusable[newIndex].focus();
      e.preventDefault();
    }

    this.focusedIndex = newIndex !== false ? newIndex : nextIndex;
  }

  onKeyDown(e) {
    if (e.key === 'Tab') {
      this.navigate(e);
    }
  }

  onKeyUp(e) {
    if (e.key === 'Tab' && document.activeElement === this.dummy) {
      this.navigate(e);
    }
  }

  /**
   * Adds a tabbable element to the bottom of the element to ensure
   * there is an item to return to after elements you can tab into
   * (like iframes).
   */
  addTrailingDummy() {
    this.dummy = document.createElement('div');
    this.dummy.setAttribute('data-trap-tab-dummy', '');
    this.dummy.setAttribute('tabindex', '0');
    this.element.append(this.dummy);
  }

  /**
   * Trap the user's tab in the element
   */
  activate() {
    if (this.active) {
      return;
    }

    addEventListener('keydown', this.onKeyDown, true);
    addEventListener('keyup', this.onKeyUp, true);

    this.addTrailingDummy();

    this.focused = 0;
    this.focusable[this.focused].focus();

    this.active = true;
  }

  /**
   * Remove the tab trap from the element
   */
  deactivate() {
    if (!this.active) {
      return;
    }

    removeEventListener('keydown', this.onKeyDown, true);
    removeEventListener('keyup', this.onKeyUp, true);

    this.focusedIndex = null;
    this.dummy.remove();

    this.active = false;
  }

}
