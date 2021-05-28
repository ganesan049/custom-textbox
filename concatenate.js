const fs = require('fs-extra');
const concat = require('concat');
concatenate = async () =>{
    const files = [
        './dist/learn-element/runtime.js',
        './dist/learn-element/polyfills.js',
        './dist/learn-element/main.js'
      ];

  await fs.ensureDir('output');
  await concat(files, 'output/multi-textbox.js');

}
concatenate();
