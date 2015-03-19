// This is where our actual App begings.
// It's used by:
// - ship.js to boot from an Embedded HTML Import
// - index.js to boot directly for a Standalone page

// Our boilerplate uses React.
// We love it, and we thing you will too.
import React      from 'react';

// The engine contains all the logic and state for the app
import Engine     from './lib/engine';

// The views are described in the router.
import ShipRouter from './lib/router';

// Entry point for the Library
// Dont start the app from here
// Call App.start(...) from your script to boot
var App = {
  start: function(element, deployment){

    // Create the Ship Engine
    var engine = new Engine(deployment);

    // Start the router
    ShipRouter.run(function (Handler, state) {
      // On location change, Update the Engine state.
      React.render(<Handler engine={engine}/>, element);
    });
  }
}

module.exports = App
