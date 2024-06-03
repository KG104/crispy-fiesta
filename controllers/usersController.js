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

/*const typeMap = {
    "Users": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "e-mail", js: "e-mail", typ: "" },
        { json: "role", js: "role", typ: "" },
        { json: "password", js: "password", typ: "" },
        { json: "registryDate", js: "registryDate", typ: "Date" },
    ], false),
};*/

module.exports = {
    getAllUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
}