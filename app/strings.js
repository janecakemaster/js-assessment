exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    for (var i = 0; i < str.length; i++) {
      // str[i]
    };

  },
  wordWrap: function(str, cols) {
    var words = str.split(' '), 
    len = 0 ,
    result = '',
    n = '\n';

    // while (words) {
    //   var word = words.shift();
    //   if(len > cols) {
    //     len += word.length;
    //     result += word;
    //     if(result.length > cols) {
          
    //     }
    //   }
      
    // }
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
