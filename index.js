'use strict';
var eslint = require('eslint');
var _ = require('lodash');

function Es5CheckWebpackPlugin (options) {
  // Default options
  this.options = _.extend({
    useEslintrc: false,
    env: { browser: true, es6: true },
    parserOptions: { parserOptions: 6, sourceType: 'script', ecmaFeatures: { globalReturn: true, impliedStrict: true} },
    plugins: ['es5']
  }, options);
}

Es5CheckWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('done', function (compilation) {
    var engine = new eslint.CLIEngine( self.options );
    var report = engine.executeOnFiles( [compiler.options.output.path + '/*.js'] );
    var results = report.results || [];
    
    var formatter = require('eslint-friendly-formatter');
    var output = formatter(results);
    
    console.log(output)
  });
};

module.exports = Es5CheckWebpackPlugin;
