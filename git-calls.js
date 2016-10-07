const electron = require('electron');
const exec = require('child_process').exec;
const jsonParser = require('./jsonParser');

const baseDir = `${process.env.HOME}/`;

electron.ipcMain.on('get-git-version', function (event) {
    exec('git --version', function(err) {
      var isValid = !err;

      event.sender.send('get-git-version', isValid);
    });
});

electron.ipcMain.on('git-clone', function (event, url) {
  let dirName = url.split('/')[1];

  exec(`cd ${baseDir} && if [ ! -d ${dirName} ]; then git clone https://github.com/${url}.git; fi`, function(err) {
    var isValid = !err;

    event.sender.send('git-clone', isValid);
  });
});

electron.ipcMain.on('git-commit-push', function (event, url) {
  let dirName = url.split('/')[1];

  jsonParser.midiToJson(`${baseDir}${dirName}`);
  exec(`cd ${baseDir}${dirName} && git add . && git commit -m "New version" && git push origin master`, function(err) {
    var isValid = !err;

    event.sender.send('git-commit-push', isValid);
  });
});

electron.ipcMain.on('git-pull', function (event, url) {
  let dirName = url.split('/')[1];

  exec(`cd ${baseDir}${dirName} && git pull`, function(err) {
    var isValid = !err;

    event.returnValue = isValid;
  });
});
