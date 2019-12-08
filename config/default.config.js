var opts = {
  "useEslintrc": false,
  "env": {
      "browser":true,
      "es6":true
    },
    "parserOptions": {
      "ecmaVersion":6,
      "sourceType":"script",
      "ecmaFeatures": {
        "globalReturn":true,
        "impliedStrict":true
      }
     },  
    "plugins": [
      "es5"
    ],
    "rules": {}
  };
exports.module = opts;