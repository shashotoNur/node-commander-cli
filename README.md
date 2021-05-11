
# Admin Management CLI

Command line interface for managing admins.
Uses Mongoose as an ORM for MongoDB, Commander.js to handle the commands and Inquirer.js to get additional information to carry out the commands.

## Installation

Install the dependencies

```sh
npm install
```

## Create Symlink

Go to the base directory of the project to create the symlink

```sh
npm link
```

## Commands

### Check the version

```sh
admin-cli --version
```

### List Admins (list or l)

```sh
admin-cli list
```

### Find Admins (find or f)

```sh
admin-cli find [NAME]
```

### Add Admin (add or a)

```sh
admin-cli add
```

### Update Admin (update or u)

```sh
admin-cli update [_ID]
```

### Remove Admin (remove or r)

```sh
admin-cli remove [_ID]
```
