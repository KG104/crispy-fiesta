const fs = require('fs');
const crypto = require('crypto');
// read data from json file
let users = JSON.parse(fs.readFileSync('./models/users.json'));

// generates an id using crypto library
function generateID() {
    return crypto.randomUUID();
}

// get all of the users
const getAllUsers = (req, res) => {
    res.json(users);
}

// add a new user
const addUser = (req, res) => {
    var id = generateID();
    let user = {
        userID: id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        registryDate: req.body.registryDate
    }

    users.push(user);
    fs.writeFileSync('./models/users.json', JSON.stringify(users, null, 2));
    res.status(200).json(user);
}

// get one specific user by their id
const getUser = (req, res) => {
    users = JSON.parse(fs.readFileSync('./models/users.json'));
    searchedUser = users.filter(element => element.userID === element.id);
    // if the user could be found
    if(searchedUser) res.json(searchedUser);
    else res.status(404).send("User could not be found ):");
}

// update one specific user by their id
const updateUser = (req, res) => {
    let userToUpdate = blogs.find(element => element.userID == req.params.id);
    // if a user with this id exists
    if (userToUpdate) {
        // update the keys
        userToUpdate.userID = req.params.userID;
        userToUpdate.name = req.body.name;
        userToUpdate.email = req.body.email;
        userToUpdate.role = req.body.role;
        userToUpdate.password = req.body.password;
        userToUpdate.registryDate = req.body.registryDate;
        fs.writeFileSync('./models/blog.json', JSON.stringify(users, null, 2));
        res.status(200).json(users);
    } else res.status(404).send("Der gesuchte User existiert nicht ):");
}

// delete one specific user by their id
const deleteUser = (req, res) => {
    // filter out the user with the specified id
    users = users.filter(element => element.userID !== req.params.id);
    // overwrite the json file 
    fs.writeFileSync('./models/users.json', JSON.stringify(users, null, 2));
    res.status(200).json(users);
}

module.exports = {
    getAllUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
}