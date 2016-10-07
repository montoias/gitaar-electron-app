var fs = require('fs');
var midiConverter = require('midi-converter');
var fsExtra = require('fs-extra');

const temporary = 'temporary';
const master = '/master.json';

module.exports = {
  midiToJson: function(homeDirectory) {
    var midiSong = fs.readFileSync(`${homeDirectory}/super-cool-song.mid`, 'binary');
    var jsonSong = midiConverter.midiToJson(midiSong);

    fs.writeFileSync(`${homeDirectory}${master}`, JSON.stringify(jsonSong, null, '\t'));

    fsExtra.removeSync(`${homeDirectory}/${temporary}`);
    fs.mkdirSync(`${homeDirectory}/${temporary}`);

    var json = JSON.parse(fs.readFileSync(`${homeDirectory}${master}`));

    for(var i = 0; i < json['tracks'].length; i++) {
      fs.writeFileSync(`${homeDirectory}/${temporary}/` + i, JSON.stringify(json['tracks'][i], null, '\t'));
    }
  },
};
