import * as Sentry from '@sentry/react';


// ---------------

// import * as Sentry from '@sentry/browser';
// import { addGlobalEventProcessor } from '@sentry/browser';
// import { BrowserTracing } from '@sentry/tracing';

// const env = require('../../../../../shared/src/assets/js/lib/env');

// addGlobalEventProcessor(event => {
//   if (event.type === 'transaction' && window.jhu_logger_data && window.jhu_logger_data.transaction_name) {
//     event.transaction = window.jhu_logger_data.transaction_name;
//   }

//   return event;
// });

// const devEnv = () => {
//   // only log production errors
//   return env && env !== 'production';
// };

// // filter out some user agents that produce noise, are old
// const userAgentToIgnore = () => {
//   const ignoreUserAgents = ['Vivaldi', 'Firefox\/3\.6', 'PhantomJS', 'Pingdom.com_bot', 'QQBrowser'];

//   const pattern = new RegExp('(' + ignoreUserAgents.join('|') + ')');
//   return pattern.test(window.navigator.userAgent);
// };

// const beforeSend = (event, hint) => {

//   if (devEnv() || userAgentToIgnore()) {
//     return null;
//   }

//   // add some data
//   if (hint.originalException) {
//     if (!event.extra) {
//       event.extra = {};
//     }
//     event.extra.hint_originalException = hint.originalException;
//   }

//   return event;

// };

export default class Logger {

  constructor() {

    Sentry.init({
      dsn: 'https://2d58cfaff03e6f296e610fb8e71010a2@o106740.ingest.us.sentry.io/4508806591348737',
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      // Tracing
      tracesSampleRate: 1.0, //  Capture 100% of the transactions

      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
  }

  /**
   * Log an error to Sentry
   * Available levels: fatal, error, warning, info
   * @param  {string/exception} error   String or exception that defines the error
   * @param  {object}           options Level, tag, and extra data to send to Sentry
   */
  log(error, options) {

    const opts = {
      level: 'info',
      data: {},
      tags: {},
      ...options
    };

    if (typeof error === 'string') {
      Sentry.captureMessage(error, {
        extra: opts.data,
        level: opts.level,
        tags: opts.tags
      });
    } else {
      Sentry.captureException(error);
    }
  }

};
