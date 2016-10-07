import Ember from 'ember';

const ipc = require('electron').ipcRenderer;

export default Ember.Route.extend({
  model(params) {
    this._isInvalid(params.url, ipc.sendSync('git-pull', params.url));

    return params;
  },

  _isInvalid(url, isValid) {
    if (!isValid) {
      this.transitionTo('resolve-conflicts', url);
    }
  }
});
