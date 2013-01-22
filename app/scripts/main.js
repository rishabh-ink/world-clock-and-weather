(function() {
  "use strict";

  require.config({
    paths: {
      'hm':                 "vendor/hm",
      'esprima':            "vendor/esprima",
      'domready':           "../components/requirejs-domready/domReady",             // requirejs.com/docs/download.html#domReady
      'lib.use':            "../components/use.js/use",                              // documentup.com/tbranyen/use.js
      'jquery':         "../components/jquery/jquery",                           // jquery.com
      'lib.knockoutjs':     "../components/knockout-2.2.1/index",                    // knockoutjs.com
      'lib.jquery-mobile':  "../components/jquery.mobile-1.2.0/jquery.mobile-1.2.0", // jquerymobile.com
      'lib.debug':          "../components/javascript-debug/ba-debug"                // benalman.com/code/projects/javascript-debug
    },

    shim: {
      'lib.use!lib.jquery-mobile': {
        deps: [
          'jquery'
        ]
      }
    },

    use: {
      'debug': {
        'attach': "debug"
      }
    }
  });
   
  require([
    "lib.app",
    "jquery",
    "lib.knockoutjs",
    "lib.jquery-mobile",
    "lib.debug"
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