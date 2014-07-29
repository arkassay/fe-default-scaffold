'use strict';

var pb = pb || {};

(function() {
  pb.namespace = function(nsString) {
    var parts = nsString.split('.'),
        parent = pb,
        i;
    if (parts[0] === 'pb') {
      parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    }
    return parent;
  };
}());

pb.version = '0.0.0';
pb.namespace('controller');

pb.controller = (function() {

  var init = function init() {


    handlers();

  };

  function handlers() {
    console.log('HI!');
    $(window).load(function() {
      //insert initial controller event handlers here.
    });
  }

  return {
    init: init
  };
})();


$(function() {
  pb.controller.init();
});
