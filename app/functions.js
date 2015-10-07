exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  functionFunction : function(str) {
    
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(p, n) {
      return p + n;
    });
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
