World Clock and Weather
-----------------------

## Introduction

A world clock and weather app for Firefox OS.

Version: **0.0.0**

Developer: **[Rishabh Rao](http://rishabhsrao.github.com)**

License: **[Apache License 2.0](world-clock-and-weather/blob/master/LICENSE.md)**

## Technologies used

* KnockoutJS
* Yeoman.io
* RequireJS
* jQuery deferred
* HTML5 GeoLocation API
* Yahoo! Weather API via Yahoo! Query Language and Yahoo! Pipes (http://pipes.yahoo.com/pipes/pipe.info?_id=687279a3ea30ea78c978b1bf6e235055)

## Build instructions

This project's library dependencies are listed in [component.json](world-clock-and-weather/blob/master/component.json).

Just run `bower install` in the top level directory of this project to download the dependencies.

Once done, you can run `yeoman server` to run locally or `yeoman build` to generate a build.

## Logic

1. Query localStorage for data
2. If found,
    load from it
3. If not found,
    get geo-location
    make AJAX request
    save to localStorage
    load from it