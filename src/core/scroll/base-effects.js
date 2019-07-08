/**
 * Functions provide basic animation effects.
 *
 * @namespace core.scroll
 * @class     BaseEffects
 */

/**
 * Simple zoom effect
 *
 * @method effectSimpleZoom
 *
 * @param {Object} element   HTML element
 * @param {number} value     Value in range [0 - 1]
 * @param {number} direction Value of the moving direction
 */
export function effectSimpleZoom(element, value, direction) {
  if (direction > 0) {
    const scale = value < 0.9 ? value : 1;
    element.style.transform = `scale(${scale})`;
  }
}

/**
 * Simple slide effect
 *
 * @method effectSimpleSlide
 *
 * @param {Object} element   HTML element
 * @param {number} value     Value in range [0 - 1]
 * @param {number} direction Value of the moving direction
 */
export function effectSimpleSlide(element, value, direction) {
  if (direction > 0) {
    const y = element.offsetHeight / 2 * (1 - value) * -direction;
    element.style.transform = `translateY(${y}px)`;
  }
}

/**
 * Effect function factory
 *
 * @method getEffect
 *
 * @param name Base animation effect name
 *
 * @return {effectFunction|effectSimpleZoom} The effect function
 */
export function getEffect(name) {
  const effects = {
    zoom:  effectSimpleZoom,
    slide: effectSimpleSlide,
  };
  return effects[name] || effectSimpleZoom;
}
