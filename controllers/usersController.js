const fs = require('fs');
// read data from json file
let users = JSON.parse(fs.readFileSync('./models/users.json'));

// get all of the users
const getAllUsers = (req, res) => {

}

// add a new user
const addUser = (req, res) => {

}

// get one specific user by their id
const getUser = (req, res) => {

}

// update one specific user by their id
const updateUser = (req, res) => {

}

// delete one specific user by their id
const deleteUser = (req, res) => {

}

module.exports = {
    getAllUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
}