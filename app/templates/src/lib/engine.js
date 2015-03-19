'use strict';
/*global require, module, Hull, console*/

// NOT COMPLETE
// NOT COMPLETE 
// NOT COMPLETE 

var assign = require('object-assign');
var Emitter = require('events').EventEmitter;



/**
 * The engine is a condensed and simplified version of the Flux architecture,
 * It combines Store, Dispatcher and Actions into a single file, ensuring
 * top-down data flows that prevent bugs and make the architecture easy to 
 * understand
 */

var Constants = {
  INTRODUCTION_STEP: 'introduction_step',
  RESULT_STEP: 'result_step',
};

var CHANGE_EVENT='change'

function Engine(deployment) {
  var self=this;
  var onChange = function() {
    self.emitChange();
  }

  // Subscribe to every Hull user event
  Hull.on('hull.user.*', onChange);
  this.emitChange();
}

assign(Engine.prototype, Emitter.prototype, {
  addChangeListener: function(listener) {this.addListener(CHANGE_EVENT, listener);},
  removeChangeListener: function(listener) {this.removeListener(CHANGE_EVENT, listener);},
  emitChange: function(message) {this.emit(CHANGE_EVENT, message);}
});

Engine.Constants = Constants;

module.exports = Engine;
