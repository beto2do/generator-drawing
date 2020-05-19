var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    method1() {
        this.log('method 1 just ran');
    }
    
    _private_method() {
        console.log('private hey');
    }

    async prompting() {
        this.answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname
          }
        ]);
    }

    writing() {
        const projectName = this.answers.name || 'drawing-project';
        this.fs.copyTpl(
          this.templatePath('index.html'),
          this.destinationPath(`${projectName}/index.html`),
          { title: projectName }
        );
        this.fs.copyTpl(
            this.templatePath('styles.css'),
            this.destinationPath(`${projectName}/styles.css`),
            { title: projectName }
        );
        this.fs.copyTpl(
            this.templatePath('readme.dm'),
            this.destinationPath(`${projectName}/readme.dm`),
            { title: projectName }
        );
    }
};