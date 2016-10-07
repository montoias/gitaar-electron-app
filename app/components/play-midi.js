import Ember from 'ember';

export default Ember.Component.extend({
  url: null,
  song: null,
  isPlaying: false,

  didInsertElement() {
    this._super();

    this.set('song', new MidiPlayer(this.get('url', this.get('elementId'))));
  },

  actions: {
    play() {
      this.get('song').play();

      this.set('isPlaying', true);
    },

    stop() {
      this.get('song').stop();

      this.set('isPlaying', false);
    }
  },

  _stopSong() {
    this.set('isPlaying', false);
  },
});
