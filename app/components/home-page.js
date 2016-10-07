import Ember from 'ember';
const ipc = require('electron').ipcRenderer;

export default Ember.Component.extend({
  isLoading: false,
  isLoaded: false,
  isError: false,
  url: '',

  actions: {
    clone() {
      this.set('isLoading', true);
      this.set('isLoaded', false);
      this.set('isError', false);

      ipc.send('git-clone', this.get('url'));

      ipc.on('git-clone', (event, isValid) => {
          this.set('isError', !isValid);
          this.set('isLoaded', true);
          this.set('isLoading', false);
      });
    }
  }
});
