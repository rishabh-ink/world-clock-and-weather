define([
  "lib.use!lib.debug",
  "lib.knockoutjs"
], function(debug, ko) {
  "use strict";

  var Module = function() {
    var self = this;

    self.city = {
      geo: {
        name: ko.observable(),
        country: ko.observable(),
        timezoneOffset: ko.observable()
      },

      weather: {
        temperature: {
          average: ko.observable(),
          maximum: ko.observable(),
          minimum: ko.observable()
        },

        text: ko.observable()
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