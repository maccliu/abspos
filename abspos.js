/**
 * Gets the bounding rect of a HTML Element relative to the page.
 *
 * @param {HTMLElement} el
 * @returns {Object}
 */
function absPos(el) {
  // the bounding rect position
  var rect = el.getBoundingClientRect();

  // window.scrollX and window.scrollY. 
  // aka. the current viewport's x and y.
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX
  var vx = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  var vy = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  return {
    left: rect.left + vx,
    top: rect.top + vy,
    right: rect.right + vx,
    bottom: rect.bottom + vy,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
    x: rect.left + vx, // alias for left
    y: rect.top + vy, // alias for top
    vx: vx,
    vy: vy,
  };
}

/**
 * Gets the bounding rect of a HTML Element relative to the current viewport.
 *
 * @param {HTMLElement} el
 * @returns {Object}
 */
function viewportPos(el) {
  var rect = el.getBoundingClientRect();

  var left = rect.left;
  var right = rect.right;
  var top = rect.top;
  var bottom = rect.bottom;

  var width = right - left;
  var height = bottom - top;

  return {
    left: left,
    top: top,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
  }
}