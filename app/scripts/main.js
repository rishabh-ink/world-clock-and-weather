(function() {
  "use strict";

  require.config({
    paths: {
      'hm':                     "vendor/hm",
      'esprima':                "vendor/esprima",
      'domready':               "../components/requirejs-domready/domReady", // requirejs.com/docs/download.html#domReady
      'lib.use':                "../components/requirejs-use/use", // documentup.com/tbranyen/use.js
      'jquery':                 "../components/jquery/jquery", // jquery.com
      'lib.knockoutjs':         "../components/knockoutjs/index", // knockoutjs.com
      'lib.knockoutjs-mapping': "../components/knockoujs-mapping/knockout.mapping", // github.com/SteveSanderson/knockout.mapping
      'lib.jquery-mobile':      "../components/jquery-mobile/jquery.mobile-1.2.0", // jquerymobile.com
      'lib.debug':              "../components/javascript-debug/ba-debug", // benalman.com/code/projects/javascript-debug

      'util.Storage':           "util/Storage",
      'util.Constants':         "util/Constants",
      'util.ErrorHandler':      "util/ErrorHandler",
      'util.GeoLocation':       "util/GeoLocation",
      'util.Network':           "util/Network",

      'model.City':             "model/City",

      'viewmodel.Home':         "viewmodel/Home"
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
      },

      'lib.jquery-mobile': {
        'attach': "jquery"
      }
    }
  });

  require([
    "jquery",
    "lib.knockoutjs",
    "lib.use!lib.jquery-mobile",
    "lib.use!lib.debug",
    "viewmodel.Home",
    "model.City"
  ], function(
    jQuery,
    ko,
    jQm,
    debug,
    HomeViewModel,
    City
  ) {
    var homeViewModel = HomeViewModel.create();

    var viewModels = {
      homeViewModel: homeViewModel
    };

    ko.applyBindings(viewModels);
  });
})();