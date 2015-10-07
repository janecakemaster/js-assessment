exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bits = (num).toString(2);

    return parseInt(bits[bits.length - bit], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // debugger;
    // return parseInt(parseInt(num, 8), 2);
  },

  multiply: function(a, b) {
    // var x = a.toPrecision(),
    //     y = b.toPrecision(),
    //     len = x.length > y.length ? x.length : y.length;
    //     debugger;
    // return Math.round(x * y, len);
  }
};
