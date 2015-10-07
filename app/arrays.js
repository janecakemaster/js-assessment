exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, next) {
      return prev + next;
    });
  },

  remove : function(arr, item) {
    var result = [],
    i = 0;
    while (i < arr.length) {
      if (item !== arr[i]) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var shifted, i = 0, 
        len = arr.length;
    // [1,2,3,4]
    while(i < len) {
      shifted = arr.shift();
      if (shifted!==item) {
        arr.push(shifted);
        i++;
      }
      else {
        len--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(thing) {
      return thing === item;
    }).length;
  },

  duplicates : function(arr) {
    var obj = {}, 
        results = [];
    for (var i = 0; i < arr.length; i++) {
      if(obj[arr[i]]) {
        obj[arr[i]] = 'set';
      }
      else {
      obj[arr[i]] = 'unset';
      }
    }
    for(var key in obj) {
      if(obj[key] === 'set') {
        results.push(key);
      }
    }
    return results.map(function(item) {
      return parseInt(item, 10);
    });
  },

  square : function(arr) {
    return arr.map(function(thing) {
      return thing * thing;
    })
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    arr.forEach(function(item, index) {
      if(item===target) {
        results.push(index);
      }
    });
    return results;
  }
};
