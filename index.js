
const mongoose = require('mongoose');

// Map mongoose profile to global promise (mongoose promise is deprecated)
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/admincli',
  {
    useMongoClient: true
  });

// Import model
const Admin = require('./models/admin');

// Add Admin
const addAdmin = (admin) =>
  {
    Admin.create(admin)
      .then(admin =>
      {
        console.info('New Admin Added', admin);
        db.close();
      });
  }

// Find Admin
const findAdmin = (name) =>
  {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Admin.find({$or: [{firstname: search}, {lastname: search}]})
      .then(admin =>
      {
        console.info(admin);
        console.info(`${admin.length} matches`);
        db.close();
      });
  }

// Update Admin
const updateAdmin = (_id, admin) =>
  {
    Admin.update({ _id }, admin)
      .then(admin =>
      {
        console.info('Admin Updated', admin);
        db.close();
      });
  }

// Remove Admin
const removeAdmin = (_id) =>
  {
    Admin.remove({ _id })
      .then(admin =>
      {
        console.info('Admin Removed', admin);
        db.close();
      });
  }

// List Admin
const listAdmins = () =>
  {
    Admin.find()
      .then(admin =>
      {
        console.info(admin);
        console.info(`${admin.length} Admins`);
        db.close();
      });
  }

// Export All Methods
module.exports = {
  addAdmin,
  findAdmin,
  updateAdmin,
  removeAdmin,
  listAdmins
}