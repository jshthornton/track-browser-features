import _ from 'lodash';

export default class {
  constructor(callback) {
    this._callback = callback;

    this._track();
  }

  _track() {
    var features = this._omitNonFeatures();
    this._callback(features);
  }

  _omitNonFeatures() {
    return _.omit(window.Modernizr, [
      '_version',
      '_cssomPrefixes',
      '_domPrefixes',
      'addTest',
      'testAllProps',
      'testProp'
    ]);
  }
};