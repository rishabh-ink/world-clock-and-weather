define([
  "lib.use!lib.debug",
  "util.Storage",
  "util.Constants",
  "util.ErrorHandler",
  "lib.knockoutjs"
], function(
  debug,
  Storage,
  Constants,
  ErrorHandler,
  ko) {
  "use strict";

  var Module = function() {
    var self = this;

    self.city = {
      geo: {
        name: ko.observable(""),
        country: ko.observable(""),

        coordinates: {
          latitude: ko.observable(""),
          longitude: ko.observable("")
        },

        timezoneOffset: ko.observable("")
      },

      weather: {
        temperature: {
          celcius: {
            average: ko.observable(0),
            maximum: ko.observable(0),
            minimum: ko.observable(0)
          },

          fareheit: {
            average: ko.observable(0),
            maximum: ko.observable(0),
            minimum: ko.observable(0)
          }
        },

        text: ko.observable("")
      }
    };

    Module.prototype.applyMappings = function(value) {
      debug.log("model.city.applyMappings", value);
    };
  };

  return {
    create: function() {
      return new Module();
    }
  };
});