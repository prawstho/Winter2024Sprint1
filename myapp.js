global.DEBUG = true;

const fs = require("fs");

const { initializeApp } = require('./init.js');

const myArgs = process.argv.slice(2);

if(DEBUG) if(myArgs.length >= 1) console.log('the myapp.args: ', myArgs);

switch (myArgs[0]) {
  case 'init':
  case 'i':
      if(DEBUG) console.log(myArgs[0], ' - initialize the app.');
      initializeApp();
      break;
  case 'config':
  case 'c':
      if(DEBUG) console.log(myArgs[0], ' - display the configuration file');
      break;
  case 'token':
  case 't':
      if(DEBUG) console.log(myArgs[0], ' - generate a user token');
      break;  
  case '--help':
  case '--h':
  default:
      fs.readFile(__dirname + "/usage.txt", (error, data) => {
          if(error) throw error;
          console.log(data.toString());
      });
}