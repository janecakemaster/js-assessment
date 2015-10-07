exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  alterObjects : function(constructor, greeting) {
    // with (constructor) {
    //   constructor.greeting = greeting;
    // }
  },

  iterate : function(obj) {
    var results = [];
    for (thing in obj) {
      if(obj.hasOwnProperty(thing)) {
        results.push(thing + ': ' + obj[thing]);
      }
    }
    return results;
  }
};
