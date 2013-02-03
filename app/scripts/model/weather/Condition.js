/**
 * Condition
 * The Condition module.
 * @author rishabhsrao
 */
 define([
  "lib.use!lib.debug",
  "util.Storage",
  "util.Constants",
  "util.ErrorHandler",
  "util.Mapper",
  "knockout"
], function(
  debug,
  Storage,
  Constants,
  ErrorHandler,
  Mapper,
  ko) {
  "use strict";

  var Module = function() {
    var self = this;

    Module.prototype.init = function() {
      debug.log("model.weather.Condition", "init");

      self.code = ko.observable("");
      self.date = ko.observable("");
      self.temp = ko.observable("");
      self.text = ko.observable("");
      self.high = ko.observable("");
      self.low = ko.observable("");
    };

    Module.prototype.applyMappings = function(data) {
      debug.log("model.weather.Condition", "applyMappings", { data: data });

      var mapper = Mapper.create();
      mapper.map(self, data);
    };

    self.init();

    return self;
  };

  return {
    create: function() {
      return new Module();
    }
  };
});