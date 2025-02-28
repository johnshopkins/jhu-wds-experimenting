/**
 * The view ports were selected based on data from the analytics of jhu.edu
 * and hub.jhu.edu. Additionally, data from Browserstack was considered:
 * https://www.browserstack.com/guide/common-screen-resolutions
 */

export default {
  small_mobile: {
    // iphone 12mini
    name: 'Small mobile',
    type: 'mobile',
    styles: {
      height: '812px',
      width: '375px',
    },
  },
  medium_mobile: {
    // iphone 14
    name: 'Medium mobile',
    type: 'mobile',
    styles: {
      height: '844px',
      width: '390px',
    },
  },
  large_mobile: {
    // iphone 14 pro max
    name: 'Large mobile',
    type: 'mobile',
    styles: {
      height: '932px',
      width: '430px',
    },
  },
  tablet: {
    // ipad
    name: 'Tablet',
    type: 'tablet',
    styles: {
      height: '1024px',
      width: '768px',
    }
  },
  large_tablet: {
    // galaxy tab
    name: 'Large tablet',
    type: 'tablet',
    styles: {
      height: '1280px',
      width: '800px',
    }
  },
  small_desktop: {
    name: 'Small desktop',
    type: 'desktop',
    styles: {
      height: '720px',
      width: '1040px',
    }
  },
  medium_desktop: {
    name: 'Medium desktop',
    type: 'desktop',
    styles: {
      height: '780px',
      width: '1280px',
    }
  },
  large_desktop: {
    // limited to 1600w because our sites have a max with of 1440px
    name: 'Large desktop',
    type: 'desktop',
    styles: {
      height: '1200px',
      width: '1600px',
    }
  }
};
