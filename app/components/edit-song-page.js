import Ember from 'ember';
const ipc = require('electron').ipcRenderer;

export default Ember.Component.extend({
  name: null,
  isCommiting: false,

  actions: {
    commitAndPush() {
      this.set('isCommiting', true);
      ipc.send('git-commit-push', this.get('name'));

      ipc.on('git-commit-push', (event, isValid) => {
        console.log(isValid);
        this.set('isCommiting', false);
      });
    }
  }
});
