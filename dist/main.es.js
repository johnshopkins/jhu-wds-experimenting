class n {
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
    arguments[0] instanceof HTMLElement ? (this.element = arguments[0], typeof arguments[1] == "object" && this.setClassProperties(arguments[1])) : typeof arguments[0] == "object" && this.setClassProperties(arguments[0]), this.bindMethods(), this.classInit();
  }
  setClassProperties(e) {
    for (const t in e)
      this[t] = e[t];
  }
  bindMethods() {
    this.init = this.init.bind(this), this.classInit = this.classInit.bind(this), this.teardown = this.teardown.bind(this), this.addEventListeners = this.addEventListeners.bind(this), this.removeEventListeners = this.removeEventListeners.bind(this), this.methodsToBind && this.methodsToBind.forEach((e) => {
      this[e] = this[e].bind(this);
    });
  }
  init() {
  }
  classInit() {
    this.init(), this.addEventListeners();
  }
  addEventListeners() {
  }
  removeEventListeners() {
  }
  teardown() {
    this.removeEventListeners();
  }
}
const o = (i) => i.map((e) => (e.nodeName === "A" && !e.hasAttribute("href") && (e.setAttribute("role", "button"), e.addEventListener("click", (t) => t.preventDefault())), e)), a = [
  'a[href]:not([href=""])',
  'area[href]:not([href=""])',
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "object",
  "embed",
  "audio",
  "video",
  '*[contenteditable]:not([contenteditable="false"])',
  '[tabindex="0"]'
].map((i) => `${i}:not([tabindex="-1"])`), h = {
  allowOutsideClick: !0,
  allowEscape: !0
};
class d {
  constructor(e, t = {}) {
    this.active = !1, this.element = e, this.config = { ...h, ...t }, this.focusable = e.querySelectorAll(a.join(",")), this.focusedIndex = null, this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.navigate = this.navigate.bind(this);
  }
  navigate(e) {
    const t = e.shiftKey ? this.focusedIndex - 1 : this.focusedIndex + 1;
    let s = !1;
    t > this.focusable.length - 1 ? s = 0 : t === -1 && (s = this.focusable.length - 1), s !== !1 && (this.focusable[s].focus(), e.preventDefault()), this.focusedIndex = s !== !1 ? s : t;
  }
  onKeyDown(e) {
    e.key === "Tab" && this.navigate(e);
  }
  onKeyUp(e) {
    e.key === "Tab" && document.activeElement === this.dummy && this.navigate(e);
  }
  /**
   * Adds a tabbable element to the bottom of the element to ensure
   * there is an item to return to after elements you can tab into
   * (like iframes).
   */
  addTrailingDummy() {
    this.dummy = document.createElement("div"), this.dummy.setAttribute("data-trap-tab-dummy", ""), this.dummy.setAttribute("tabindex", "0"), this.element.append(this.dummy);
  }
  /**
   * Trap the user's tab in the element
   */
  activate() {
    this.active || (addEventListener("keydown", this.onKeyDown, !0), addEventListener("keyup", this.onKeyUp, !0), this.addTrailingDummy(), this.focused = 0, this.focusable[this.focused].focus(), this.active = !0);
  }
  /**
   * Remove the tab trap from the element
   */
  deactivate() {
    this.active && (removeEventListener("keydown", this.onKeyDown, !0), removeEventListener("keyup", this.onKeyUp, !0), this.focusedIndex = null, this.dummy.remove(), this.active = !1);
  }
}
class f extends n {
  /**
   * Creates a modal
   * @param {HTMLElement} element Modal HTML Element
   */
  constructor(e) {
    super(e, {
      methodsToBind: ["openModal", "closeModal", "onClick", "onKeyDown"]
    });
  }
  init() {
    this.isOpen = !1, this.modal = this.setupModal(this.element), this.autoOpen && this.openModal();
  }
  setupModal(e) {
    if (this.autoOpen = e.dataset.openOnload !== void 0, this.forceDecision = e.dataset.forceDecision !== void 0, this.openTriggers = this.findOpenTriggers(e), !this.autoOpen && this.openTriggers.length === 0) {
      const t = e.id ? `#${e.id}` : "";
      throw new Error(`Modal${t} does not have an open trigger.`);
    }
    return this.trap = new d(e.querySelector(".modal-content")), this.closeTriggers = this.findCloseTriggers(e), this.placeholder = document.createElement("div"), this.placeholder.setAttribute("data-placeholder-for", e.id), e.after(this.placeholder), document.body.appendChild(e), e;
  }
  /**
   * Searches the DOM for elements with an `aria-controls` attribute matching the ID of this modal.
   * @param {HTMLElement} element Modal HTML Element
   * @returns array
   */
  findOpenTriggers(e) {
    const t = Array.from(document.body.querySelectorAll(`*[aria-controls="${e.id}"]`));
    return o(t);
  }
  /**
   * Searches within the modal for elements with a `data-close-modal` attribute.
   * @param {HTMLElement} element Modal HTML Element
   * @returns array
   */
  findCloseTriggers(e) {
    return o(Array.from(e.querySelectorAll("[data-close-modal]")));
  }
  onKeyDown(e) {
    e.key === "Escape" && this.closeModal();
  }
  onClick(e) {
    e.target === this.modal && this.closeModal();
  }
  addEventListeners() {
    this.openTriggers.forEach((e) => e.addEventListener("click", this.openModal)), this.closeTriggers.forEach((e) => e.addEventListener("click", this.closeModal)), this.forceDecision || (this.modal.addEventListener("click", this.onClick), addEventListener("keydown", this.onKeyDown));
  }
  removeEventListeners() {
    this.openTriggers.forEach((e) => e.removeEventListener("click", this.openModal)), this.closeTriggers.forEach((e) => e.removeEventListener("click", this.closeModal)), this.forceDecision || (this.modal.removeEventListener("click", this.onClick), removeEventListener("keydown", this.onKeyDown));
  }
  /**
   * Hides (when a modal is opened) or shows (when a modal is closed)
   * top-level HTML elements from screen readers using aria-hidden attribute.
   */
  toggleTopLevelElements() {
    typeof this.hiddenElements > "u" && (this.hiddenElements = []);
    const e = this.isOpen === !0 ? document.querySelectorAll("body > *:not([aria-hidden])") : this.hiddenElements;
    for (let t of e)
      t !== this.modal && (this.isOpen ? (this.hiddenElements.push(t), t.setAttribute("aria-hidden", "true")) : t.removeAttribute("aria-hidden"));
    this.isOpen === !1 && (this.hiddenElements = []);
  }
  openModal() {
    this.modal.getAttribute("aria-hidden") === "true" && (this.modal.removeAttribute("aria-hidden"), this.initalAriaHiddenValue = "true"), this.isOpen = !0, this.modal.classList.add("open"), this.returnFocusTo = document.activeElement, this.trap.activate(), this.toggleTopLevelElements();
  }
  closeModal() {
    this.initalAriaHiddenValue && (this.modal.setAttribute("aria-hidden", this.initalAriaHiddenValue), this.initalAriaHiddenValue = null), this.isOpen = !1, this.modal.classList.remove("open"), this.trap.deactivate(), this.toggleTopLevelElements(), this.returnFocusTo && this.returnFocusTo.focus();
  }
  teardown() {
    super.teardown(), this.isOpen && this.closeModal(), this.trap.deactivate(), this.placeholder.after(this.modal), this.placeholder.remove(), this.placeholder = null;
  }
}
class c extends n {
  constructor(e, t) {
    super(e, {
      controlledSet: t,
      methodsToBind: ["close", "open", "toggle"]
    });
  }
  init() {
    this.isOpen = !1, this.triggers = {
      click: [],
      focus: [],
      mouseover: []
    };
    const e = Object.keys(this.triggers);
    this.controllers = o(Array.from(this.controlledSet.element.querySelectorAll(`*[aria-controls="${this.element.id}"]`))), this.controllers.forEach((s) => {
      s.dataset.toggleOn.trim().split(/\s+/).forEach((r) => {
        e.includes(r) && this.triggers[r].push(s);
      });
    });
    const t = this.element.querySelectorAll(":scope > .jhu-content-toggle");
    this.childToggles = Array.from(t).map((s) => new l(s, this));
  }
  close() {
    this.isOpen && (this.isOpen = !1, this.element.classList.remove("open"), this.controllers.forEach((e) => e.setAttribute("aria-expanded", !1)), this.childToggles.forEach((e) => {
      e.closeAll();
    }));
  }
  open() {
    this.isOpen || (this.isOpen = !0, this.element.classList.add("open"), this.controllers.forEach((e) => e.setAttribute("aria-expanded", !0)), this.controlledSet.closeAll({ except: this }));
  }
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  addEventListeners() {
    this.triggers.click.forEach((e) => {
      e.addEventListener("click", this.toggle);
    }), this.triggers.focus.forEach((e) => {
      e.addEventListener("focus", this.open), this.controlledSet.element.addEventListener("focusout", this.controlledSet.maybeClose);
    }), this.triggers.mouseover.forEach((e) => {
      e.addEventListener("mouseover", this.open), this.controlledSet.element.addEventListener("mouseleave", this.close);
    });
  }
  removeEventListeners() {
    this.triggers.click.forEach((e) => {
      e.removeEventListener("click", this.toggle);
    }), this.triggers.focus.forEach((e) => {
      e.removeEventListener("focus", this.open), this.controlledSet.element.removeEventListener("focusout", this.controlledSet.maybeClose);
    }), this.triggers.mouseover.forEach((e) => {
      e.removeEventListener("mouseover", this.open), this.controlledSet.element.removeEventListener("mouseleave", this.close);
    });
  }
  teardown() {
    super.teardown(), this.childToggles.forEach((e) => e.teardown());
  }
}
class l extends n {
  constructor(e) {
    super(e, {
      methodsToBind: ["closeAll", "maybeClose"]
    });
  }
  init() {
    this.allowMultipleOpen = this.element.hasAttribute("data-allow-multiple-open");
    const e = this.element.querySelectorAll(":scope > [data-controlled]");
    this.controlled = Array.from(e).map((t) => new c(t, this));
  }
  /**
   * Close the dropdown subnav in all nav items, with the
   * exception of a NavItem passed into the except parameter.
   * @param {object} options Set of options to alter behavior of the method. Options available:
   *                         - except: close all except the passed Controlled object
   *                         - force: force all Controlled objects to close, regardless of allowMultipleOption setting
   */
  closeAll(e = {}) {
    !e.force && this.allowMultipleOpen || this.controlled.forEach((t) => {
      (!e.except || e.except && t !== e.except) && t.close();
    });
  }
  /**
   * When this.element triggers a focusout event, only close the toggle
   * if the element that is the new target is not contained within the toggle.
   * Why: the focusout event triggers on everything inside the <toggle>
   * @param {Event} e 
   * @returns null
   */
  maybeClose(e) {
    this.element.contains(e.relatedTarget) || this.closeAll();
  }
  teardown() {
    super.teardown(), this.controlled.forEach((e) => e.teardown());
  }
}
class m extends n {
  init() {
    this.toggle = new l(this.element);
  }
}
export {
  m as ContentToggle,
  f as Modal
};
