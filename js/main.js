
window.addEventListener('load', function () {
  document.addEventListener('scroll', throttle(() => {
    var topBar = document.querySelector('.top-bar');
    var header = document.querySelector('.header');
    var isTopBarActive = topBar.classList.contains('active');
    var isBelowHeader = window.scrollY > header.clientHeight;
    if (!isBelowHeader &&  isTopBarActive) {
      topBar.classList.remove('active');
    }
    else if (isBelowHeader && !isTopBarActive) {
      topBar.classList.add('active');
    }
  }), 200);
});



// from underscore.js
function throttle(func, wait) {
  var context, args, timeout, result;
  var previous = 0;
  var later = function() {
    previous = new Date;
    timeout = null;
    result = func.apply(context, args);
  };
  return function() {
    var now = new Date;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};