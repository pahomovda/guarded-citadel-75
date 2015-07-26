import {Map} from 'immutable';
import React from 'react/addons';
import Debug from 'debug';
import Cart from './Cart';
import Component from './Component';

import config from '../../../config/app';

var debug = Debug('myApp');

/*
 * @class AppRoot
 * @extends React.Component
 */
class AppRoot extends React.Component {

  /*
   * AppRootly PureRenderMixin
   *
   * in React 0.13 there is no way to attach mixins to ES6 classes
   * this is a workaround to solve this
   * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
   *
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

    /*
   * @method getChildContext
   * @returns {Object} childContext
   */
  getChildContext () {

    // share only actions with childs
    return {
      actions: this.props.actions
    };
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    debug('render <AppRoot/>');

    return <div className="appRoot">
      <h1>{config.title}</h1>
      <Cart cart={this.props.state.get('cart')} />
    </div>;
  }
}

// Context types validation
AppRoot.childContextTypes = Component.contextTypes;

// Prop types validation
AppRoot.propTypes = {
  state: React.PropTypes.instanceOf(Map).isRequired,
};

export default AppRoot;
