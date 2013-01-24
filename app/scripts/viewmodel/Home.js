"use strict";

/**
 * viewmodel.Home
 * The viewmodel.Home module.
 * @author rishabhsrao
 */
define([
  "lib.use!lib.debug",
  "util.Constants",
  "util.ErrorHandler",
  "util.Storage",
  "util.GeoLocation",
  "model.City",
  "lib.knockoutjs",
  "jquery"
],
function(
  debug,
  Constants,
  ErrorHandler,
  Storage,
  GeoLocation,
  City,
  ko,
  jQuery
) {
  debug.log("Loading viewmodel.Home");
  var Module = function() {
    var self = this;

    self.city = ko.observable();

    self.store = Storage.create();
    self.location = GeoLocation.create();

    Module.prototype.init = function() {
      debug.log("viewmodel.Home.prototype.init");

      // Get current geolocation
      var g = GeoLocation.create();
      debug.debug("viewmodel.Home.prototype.checkCacheFeasibility", "Created GeoLocation object...", g);

      g.get().done(function() {
        self.checkCacheFeasibility(g.position);
      });

      // If stale or not present or geo location is different

      // Get weather

      // Save to localstorage

      // Update UI (mostly auto, by KO)

      // End



    };

    Model.prototype.checkCacheFeasibility = function(position) {
      debug.debug("viewmodel.Home.prototype.checkCacheFeasibility");

      // Query localstorage for a previous result
      if(self.store.isAlreadyAvailable(Constants.keyrings.storage.HOME_CITY)) {
        // If found, then load it back


        // Check if it's fresh or stale

        

        // If fresh && same location, return
        
      }
    };

    return self;
  };

  return {
    create: function() {
      return new Module();
    }
  };
});