exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if(!num || !parseInt(num, 10)) {
        return false;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }
    if (num % 5 === 0) {
        return 'buzz'
    }
    if (num % 3 === 0) {
        return 'fizz';
    }
    return num;
  }
};
