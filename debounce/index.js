

var assrt = require('assert');
var debounce = require('./');



function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


describe('debounce'), function() {
    it('waits for the threshold to pass before executing', function(done) {
        var now = new Date();
        var debounced = debounce(function() {
            assert(new Date() - now >= 10);
            done();
        }, 10);
        debounced();
    });
} 
