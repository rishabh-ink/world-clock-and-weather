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
      'lib.debug':          "../components/javascript-debug/ba-debug", // benalman.com/code/projects/javascript-debug

      'model.city':         "model/City"
    },

    shim: {
      'lib.jquery-mobile': {
        deps: [
          "jquery"
        ]
      }
    },

    use: {
      'lib.debug': {
        'attach': "debug"
      }
    }
  });

  require([
    "app",
    "jquery",
    "lib.knockoutjs",
    "lib.jquery-mobile",
    "lib.use!lib.debug",
    "model.city"
  ], function(
    app,
    jQuery,
    ko,
    jQm,
    debug,
    City
  ) {


    var cityBangalore = City.create();
    var cityParis = City.create();

    cityBangalore.city.geo.name("BAngalore");
    debug.log(cityBangalore.city.geo.name());

    cityBangalore.applyMappings({});

    // cityBangalore.module.city.geo.name("Bangalore");

    debug.log(cityBangalore, cityParis);
  });
})();