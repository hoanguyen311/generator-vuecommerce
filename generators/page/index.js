const Generator = require('yeoman-generator');
const utils = require('../utils');

module.exports = class extends Generator {

  constructor(args, options) {
    super(args, options);

    this.option('name', {
      desc: 'Page name',
      type: String,
      alias: 'n'
    });
  }

  prompting() {
    const questions = [];

    if (!this.options.name) {
      questions.push({
        type: 'input',
        message: 'Page name',
        name: 'name',
        default: 'foo'
      });
    }

    return this.prompt(questions).then(props => this.props = props);
  }

  writing() {
    const names = utils.generateNames(this.options.name || this.props.name);

    this.fs.copyTpl(
      this.templatePath('page'),
      this.destinationPath(`src/pages/${names.fileName}`),
      names
    );

    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath(`src/components/${names.className}.vue`),
      names
    );
  }
}
