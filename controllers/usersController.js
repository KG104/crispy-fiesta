
const fs = require('fs');
const crypto = require('crypto');
// read data from json file
let users = JSON.parse(fs.readFileSync('./models/users.json'));

// generates an id using crypto library
function generateID() {
    return crypto.randomUUID();
}

// hashes a password
function generateHash(password) {
    return crypto.createHash('sha512').update(password).digest();
}

// get all of the users
const getAllUsers = (req, res) => {
    users = JSON.parse(fs.readFileSync('./models/users.json'));
    res.json(users);
}

// add a new user
const addUser = (req, res) => {
    var id = generateID();
    // get current Date
    var currentDate = new Date();
    var requiredFields = ['name', 'email', 'role', 'password'];
    // check if all the required fields are submitted
    if (requiredFields.every(field => req.body[field])) {
        let user = {
            userID: id,
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
            registryDate: currentDate
        }
        // save password as hexadecimal hash value
        user.password = generateHash(user.password).toString('hex');
        console.log(user.password);
        // add new user to users array 
        users.push(user);
        // write new user to json file
        fs.writeFileSync('./models/users.json', JSON.stringify(users, null, 2));
        res.status(200).json(user);
    } else res.status(500).send("Incomplete Data");
}

// get one specific user by their id
const getUser = (req, res) => {
    users = JSON.parse(fs.readFileSync('./models/users.json'));
    var searchedUser = users.find(element => element.userID === req.params.id);
    // if the user could be found
    if (searchedUser !== undefined) res.status(200).json(searchedUser);
    else res.status(404).send("User could not be found ):");
}

// update one specific user by their id
const updateUser = (req, res) => {
    users = JSON.parse(fs.readFileSync('./models/users.json'));
    var userToUpdate = users.find(element => element.userID == req.params.id);
    console.log(users);
    // if a user with this id exists
    if (userToUpdate !== undefined) {
        // update the keys
        userToUpdate.name = req.body.name;
        userToUpdate.email = req.body.email;
        userToUpdate.role = req.body.role;
        userToUpdate.password = req.body.password;
        fs.writeFileSync('./models/users.json', JSON.stringify(users, null, 2));
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
}}
