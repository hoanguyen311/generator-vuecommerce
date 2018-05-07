'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('globby');
const path = require('path');

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to ${chalk.red('generator-vuecomerce')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your application\'s name?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'How do you describe your application?',
        default: ""
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author?',
        default: this.user.git.name
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this._writeRootFiles();
    this._writeFolders();
  }

  _writeFolders() {
    ['assets', 'src', 'webpack'].forEach((folder) => {
      this.fs.copy(
        this.templatePath(folder),
        this.destinationPath(folder)
      );
    });
  }

  _writeRootFiles() {
    glob.sync(
      [this.templatePath('*'), this.templatePath('_package.json')]
    ).forEach(file => {
      this.log('copy', file);
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(path.basename(file).replace(/^_/, ''))
      );
    });

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
  }

  install() {
    this.yarnInstall();
    this.config.save()
  }

  end() {
    this.log(`🍾 We're done, now you can start development by typing ${chalk.green('yarn start')}`);
  }
};
