// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
const promptUser = () => {
    console.log(`
    =================
    Create a Readme.md
    =================
    `);
    return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title? (Required)',
      validate: projectTitle => {
        if (projectTitle) {
          return true;
        } else {
          console.log("What part of *Required* don't you understand?: enter project title!");
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description (Required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
                } else {
          console.log('REQUIRED!!!!! enter project description!');
                }
            }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('I was not asking. Enter your GitHub username!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this repository?',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Explain how to use your code.  Or else.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can one contribute to this repository?',
        validate: contribInput => {
          if (contribInput) {
            return true;
          } else {
            console.log('Explain how to contribute to your code.  Do it.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What is the method for testing and sanitizing your inputs??',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Provide test instructions.  Seriously.  Sheesh.');
            return false;
          }
        }
      },
    {
      type: 'input',
      name: 'installInstructions',
      message: 'Provide installation instructions:',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Enter instructions for usage!');
          return false;
        }
      }
    },
    {
        type: 'checkbox',
        name: 'Table Of Contents',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['Contributing','Credits','Description','Features','Installation','License','Tests','Usage','GitHub']
      },
  ]);
};

// TODO: Create a function to write README file
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
          fs.writeFile('./readme.MD', fileContent, err => {
            if (err) {
              reject(err);
              return;
            }
      
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
        });
      };




// Function call to initialize app
promptUser().then(readmeData => {
    return generatePage(readmeData);
  }) .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  }) .catch(err => {
    console.log(err);
  });
