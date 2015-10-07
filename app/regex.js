exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  },

  containsRepeatingLetter : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  },

  endsWithVowel : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  },

  captureThreeNumbers : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  },

  matchesPattern : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  },
  
  isUSD : function(str) {
    var re = /[0-9]/;
    return re.test(str);
  }
};
