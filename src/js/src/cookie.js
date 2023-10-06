class Cookie {

  constructor(name) {
    this.name = name;
  }

  set(value, days, samesite) {
    let cookie = this.name + "=" + value;

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      cookie += "; expires=" + date.toGMTString();
    }

    if (samesite) {
      cookie += "; samesite=" + samesite;
    }

    cookie += '; path=/';

    document.cookie = cookie;
  }

  get() {
    if (document.cookie.length > 0) {

      const cookieNameStart = document.cookie.indexOf(this.name + "=");

      if (cookieNameStart !== -1) {

        const cookieNameEnd = cookieNameStart + this.name.length + 1;
        let cookieEnd = document.cookie.indexOf(";", cookieNameEnd);

        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length;
        }

        return document.cookie.substring(cookieNameEnd, cookieEnd);
      }

    }

    return null;
  }

}

export default Cookie;
