class s {
  constructor(e) {
    this.name = e;
  }
  set(e, o, t) {
    let n = this.name + "=" + e;
    if (o) {
      const i = /* @__PURE__ */ new Date();
      i.setTime(i.getTime() + o * 24 * 60 * 60 * 1e3), n += "; expires=" + i.toGMTString();
    }
    t && (n += "; samesite=" + t), n += "; path=/", document.cookie = n;
  }
  get() {
    if (document.cookie.length > 0) {
      const e = document.cookie.indexOf(this.name + "=");
      if (e !== -1) {
        const o = e + this.name.length + 1;
        let t = document.cookie.indexOf(";", o);
        return t === -1 && (t = document.cookie.length), document.cookie.substring(o, t);
      }
    }
    return null;
  }
}
export {
  s as Cookie
};
