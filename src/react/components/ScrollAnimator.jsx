/**
 * @module react
 */
import React from 'react';
import PropTypes from 'prop-types';

import { getEffect } from '@sad-systems/frigate-core/scroll/base-effects';
import { getElementCenterOffsetAgainstWindowCenter } from '@sad-systems/frigate-core/scroll/core';

/**
 * The wrapper component to create an animation on scroll.
 *
 * The component passes all attributes to the wrapper div,
 * except its own props.
 *
 * Usage:
 * ```
 *      <ScrollAnimator className="my-class" enable="true" effect="slide">
 *         ...
 *      </ScrollAnimator>
 * ```
 * it creates the next DOM element:
 * ```
 *      <div class="my-class">
 *          ...
 *      </div>
 * ```
 * that will apply defined "slide" effect if page is scrolled.
 *
 * @namespace react
 * @class     ScrollAnimator
 */
class ScrollAnimator extends React.Component {
  constructor(props) {
    super(props);
    const {
      enable,
      effect,
      effectFunc,
      children,
      ...elementProps
    } = props;

    this.enable       = enable;
    this.effectFunc   = effectFunc || getEffect(effect);
    this.elementProps = elementProps;
    this.children     = children;
    this.blockRef     = React.createRef();
    this.handleScroll = () => this.onScroll();
  }

  componentDidMount() {
    if (!this.enable) return;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
    this.handleScroll();
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  componentWillUnmount() {
    if (!this.enable) return;
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  onScroll() {
    const el = this.blockRef.current;
    if (!this.enable || !el) return;

    const { value, direction } = getElementCenterOffsetAgainstWindowCenter(el);
    this.effectFunc(el, value, direction);
  }

  render() {
    return (
      <div ref={this.blockRef} {...this.elementProps}>
        { this.children }
      </div>
    );
  }
}

ScrollAnimator.propTypes = {
  /**
   * Enable/disable the effect on scroll.
   *
   * @property enable
   * @type boolean
   * @default false
   */
  enable: PropTypes.bool,
  /**
   * The base effect name.
   * Possible values: "zoom", "slide" and all witch are defined in `BaseEffects`.
   * @see BaseEffects
   *
   * @property effect
   * @type string
   * @default  'zoom'
   */
  effect: PropTypes.string,
  /**
   * The custom effect function instead of the base effect.
   *
   * @property  effectFunc
   * @type function(element, value, direction)
   * @default null
   */
  effectFunc: PropTypes.func,
  /**
   * The children
   */
  children: PropTypes.node,
};

ScrollAnimator.defaultProps = {
  enable:     false,
  effect:     'zoom',
  effectFunc: null,
  children:   null,
};

export default ScrollAnimator;
