exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    // @note 
    // TypeError: Cannot read property 'useFakeTimers' of undefined
    // at Context.<anonymous> (tests/app/count.js:31:23)
  }
};
