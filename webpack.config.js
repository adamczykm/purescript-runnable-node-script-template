'use strict';

const path = require('path');
const webpack = require('webpack');
const exec = require('child_process').exec;

const destDir = path.resolve(__dirname, 'dist');
const bundleFileName = "cli.js";
const destPath = path.join(destDir, bundleFileName);

module.exports = {
  mode: 'development',
  target: 'node',

  devtool: 'original-source',

  entry: './entry.js',

  output: {
    path: destDir,
    pathinfo: true,
    filename: bundleFileName
  },

  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    new NodeExecPlugin()
  ]

};

function NodeExecPlugin() {
  this.options = {};
}

NodeExecPlugin.prototype.apply = function(compiler) {

  compiler.hooks.afterEmit.tap("make-node-exec", () => {
    exec(`chmod u+x ${destPath}  && \
          echo 'Successfully created node executable at ${destPath}.'`,
         function(error, stdout, stderr){
           if(error){
             console.log(error, stderr);
           }
           else{
             console.log(stdout);
           }
         });
  });

};
