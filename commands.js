#!/usr/bin/env node

const commander = require('commander');
const { prompt } = require('inquirer');
const
{
  addAdmin,
  findAdmin,
  updateAdmin,
  removeAdmin,
  listAdmins
} = require('./index');

// Admin Questions
const questions =
[
  {
    type: 'input',
    name: 'firstname',
    message: 'Admin First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Admin Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Admin Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Admin Email Address'
  }
];

// Initialize commander
commander 
  .version('1.0.0')
  .description('Admin Management System')

// Add Command
commander
  .command('add')
  .alias('a')
  .description('Add an admin')
  .action(() =>
  {
    prompt(questions).then(answers => addAdmin(answers));
  });

// Find Command
commander
  .command('find <name>')
  .alias('f')
  .description('Find an admin')
  .action(name => findAdmin(name));

// Update Command
commander
  .command('update <_id>')
  .alias('u')
  .description('Update an admin')
  .action(_id => {
    prompt(questions).then(answers => updateAdmin(_id, answers));
  });

// Remove Command
commander
  .command('remove <_id>')
  .alias('r')
  .description('Remove an admin')
  .action(_id => removeAdmin(_id));

// List Command
commander
  .command('list')
  .alias('l')
  .description('List all admins')
  .action(() => listAdmins());

commander.parse(process.argv);