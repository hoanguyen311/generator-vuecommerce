const _ = require('lodash');

function firstUpperCase(str) {
  return str.replace(/^\S/, s => s.toUpperCase());
}

function camelTrans(str, isBig) {
  let i = isBig ? 0 : 1;
  str = str.split('-');
  for (; i < str.length; i += 1) {
    str[i] = firstUpperCase(str[i]);
  }
  return str.join('');
}

module.exports = {
  generateNames: function(name) {
    return {
      name: name,
      fileName: name,
      varName: camelTrans(name),
      className: camelTrans(name, true),
      constName: name.split('-').join('').toUpperCase(),
      cssClassName: _.kebabCase(name)
    };
  }
}
