/**
 * The react module.
 *
 * Provides the components for React framework.
 *
 * @module Main
 * @submodule React
 */
import React from "react";

import { getEffect } from "../core/scroll/base-effects";
import { getElementCenterOffsetAgainstWindowCenter } from "../core/scroll/core";

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
 *
 * @namespace react
 * @class     ScrollAnimator
 */
export default class ScrollAnimator extends React.Component {

    constructor(props)
    {
        super(props);

        const {
          /**
           * Enable/disable the effect on scroll
           *
           * @property enable
           * @type boolean
           * @default false
           */
          enable     = false,
          /**
           * The base effect name
           *
           * @property effect
           * @type string
           * @default  "zoom"
           */
          effect     = "zoom",
          /**
           * The custom effect function
           *
           * @property  effectFunc
           * @type function(element, value, direction)
           * @default null
           */
          effectFunc = null,

          ...elementProps
        } = props;

        this.enable       = enable;
        this.effectFunc   = effectFunc || getEffect(effect);
        this.elementProps = elementProps;
        this.blockRef     = React.createRef();
    }

    componentDidMount()
    {
        if (!this.enable) return;
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount()
    {
        if (!this.enable) return;
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }

    componentDidUpdate()
    {
        this.handleScroll();
    }

    handleScroll = event =>
    {
        const el = this.blockRef.current;
        if (!this.enable || !el) return;

        const { value, direction } = getElementCenterOffsetAgainstWindowCenter(el);
        this.effectFunc(el, value, direction);
    };

    render() {
        return (
            <div ref={ this.blockRef } { ...this.elementProps }>
                { this.props.children }
            </div>
        );
    }

}
