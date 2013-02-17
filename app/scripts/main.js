(function() {
  "use strict";

  require.config({
    paths: {
    'hm':                        "vendor/hm",
    'esprima':                   "vendor/esprima",
    'domready':                  "../components/requirejs-domready/domReady", // requirejs.com/docs/download.html#domReady
    'lib.use':                   "../components/requirejs-use/use", // documentup.com/tbranyen/use.js
    'jquery':                    "../components/jquery/jquery", // jquery.com
    'knockout':                  "../components/knockoutjs/index", // knockoutjs.com
    'lib.jquery-mobile':         "../components/jquery-mobile/jquery.mobile", // jquerymobile.com
    'lib.debug':                 "../components/console-js/console", // https://code.google.com/p/console-js

    'util.Storage':              "util/Storage",
    'util.Constants':            "util/Constants",
    'util.ErrorHandler':         "util/ErrorHandler",
    'util.GeoLocation':          "util/GeoLocation",
    'util.Network':              "util/Network",
    'util.Mapper':               "util/Mapper",

    'model.City':                "model/City",
    'model.weather.Location':    "model/weather/Location",
    'model.weather.Wind':        "model/weather/Wind",
    'model.weather.Atmosphere':  "model/weather/Atmosphere",
    'model.weather.Astronomy':   "model/weather/Astronomy",
    'model.weather.Condition':   "model/weather/Condition",
    'model.weather.Forecast':    "model/weather/Forecast",

    'viewmodel.Home':            "viewmodel/Home"
    },

    shim: {
      'lib.jquery-mobile': {
        deps: [
          "jquery"
        ]
      },

      'lib.knockout-mapping': {
        deps: [
          "knockout"
        ]
      }
    },

    use: {
      'lib.debug': {
        'attach': "console"
      },

      'lib.jquery-mobile': {
        'attach': "jquery"
      }
    }
  });

  require([
    "jquery",
    "knockout",
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

    debug.log("main", "Starting application...");

    var viewModels = {
      home: HomeViewModel.create()
    };

    debug.log("main", "Created view models...", {
      viewModels: viewModels
    });

    jQuery(document).on("pageshow", function(event) {
      var pageNode = $(event.target);

      debug.log("main", "pageshow", { 'event': event, 'pageNode': pageNode });

      debug.log("main", "pageshow", "Applying bindings", { viewmodel: pageNode.data("page-name") });
      ko.applyBindings(viewModels[pageNode.data("page-name")], pageNode.get(0));
    });

    jQuery("#default").on("pageinit", function() {
      debug.log("main", "Setting up jQuery Mobile page event handlers...");

      // jQuery.mobile.changePage("/pages/home.html");
    });
  });
})();