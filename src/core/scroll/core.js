/**
 * The core module.
 *
 * Provides the framework independent functions and classes.
 *
 * @module Main
 * @submodule Core
 */

/**
 * Core functions to create animations on scroll.
 *
 * @namespace core.scroll
 * @class     Core
 */

/**
 * The function to calculate the element's center current position in the window
 * against the center of the window
 * and returns the offset value (in percentages) and moving direction (up/down).
 *
 * @method getElementCenterOffsetAgainstWindowCenter
 *
 * @param {DOMElement} element The DOM element is moving inside the window.
 *
 * @return {Object} The object of structure: { value: number, direction: number }
 * ```
 * `value`     The element's center offset from the center of the window (in percentages).
 *             = range of: [0 .. 1];
 *              1 - the element's center is in the middle of the window
 *              0 - the element's center is out of the window (upper or lower)
 *
 * `direction` The element's moving direction (up/down from the window center)
 *             = set of: 0 | 1 | -1
 *              0 - the element is out of the window,
 *              1 - the element is moving up from center,
 *             -1 - the element is moving down from center
 * ```
 */
export const getElementCenterOffsetAgainstWindowCenter = (element) => {
  let value     = 0;
  let direction = 0;

  // const scrollTop   = window.pageYOffset || document.documentElement.scrollTop;
  // event.target.body.scrollTop; //event.srcElement.body.scrollTop;
  // const elOffsetTop = element.offsetTop;
  const windowHeight      = document.documentElement.clientHeight;
  const elHeight          = element.offsetHeight;
  const elWindowOffsetTop = element.getBoundingClientRect().top;

  if (elWindowOffsetTop <= windowHeight && elWindowOffsetTop >= -elHeight) {
    const percent = (windowHeight - elWindowOffsetTop) / (windowHeight / 2 + elHeight / 2);
    direction = percent <= 1 ? 1 : -1;
    value     = percent <= 1 ? percent : 2 - percent;
  }

  return { value, direction };
};
