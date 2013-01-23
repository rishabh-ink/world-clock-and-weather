(function() {
  "use strict";

  require.config({
    paths: {
      'hm':                 "vendor/hm",
      'esprima':            "vendor/esprima",
      'domready':           "../components/requirejs-domready/domReady", // requirejs.com/docs/download.html#domReady
      'lib.use':            "../components/requirejs-use/use", // documentup.com/tbranyen/use.js
      'jquery':             "../components/jquery/jquery", // jquery.com
      'lib.knockoutjs':     "../components/knockoutjs/index", // knockoutjs.com
      'lib.jquery-mobile':  "../components/jquery-mobile/jquery.mobile-1.2.0", // jquerymobile.com
      'lib.debug':          "../components/javascript-debug/ba-debug" // benalman.com/code/projects/javascript-debug
    },

    shim: {
      'lib.use!lib.jquery-mobile': {
        deps: [
          "jquery"
        ]
      }
    },

    use: {
      'lib.debug': {
        'attach': "debug"
      },
      'lib.jquery-mobile': {
        'attach': "jquery"
      }
    }
  });

  require([
    "app",
    "jquery",
    "lib.knockoutjs",
    "lib.use!lib.jquery-mobile",
    "lib.use!lib.debug"
  ], function(
    app,
    jQuery,
    ko,
    jQm,
    debug
  ) {
    console.log({
      app: app,
      jQuery: jQuery,
      ko: ko,
      jQm: jQm,
      debug: debug
    });
  });
})();