const fs = require('fs');
const crypto = require('crypto');
// read data from json file
let blogs = JSON.parse(fs.readFileSync('./models/equipment.json'));

function generateID() {
    return crypto.randomUUID();
}

// Helper function for reading the equipment data
function readEquipmentData() {
    const data = fs.readFileSync('./models/equipment.json');
    return JSON.parse(data);
}

// Helper function for writing the equipment data
function writeEquipmentData(data) {
    fs.writeFileSync('./models/equipment.json', JSON.stringify(data, null, 2));
}

// Function to generate a unique ID
function generateID() {
    return crypto.randomUUID();
}

// get all of the equipment
const getAllEquipment = (req, res) => {

}

// add a new piece of equipment
const addEquipment = (req, res) => {
    id = generateID();
}

// get one piece of equipment by its id
const getEquipment = (req, res) => {

}

// update one specific piece of equipment by its id
const updateEquipment = (req, res) => {

}

// delete one specific piece of equipment by its id
const deleteEquipment = (req, res) => {

}

/*const typeMap = {
    "Equipment": o([
        { json: "id", js: "id", typ: "" },
        { json: "number", js: "number", typ: 0 },
        { json: "title", js: "title", typ: "" },
        { json: "imagePath", js: "imagePath", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "availableCount", js: "availableCount", typ: 0 },
        { json: "ownerID", js: "ownerID", typ: "" },
    ], false),
};*/

module.exports = {
    getAllEquipment,
    addEquipment,
    getEquipment,
    updateEquipment,
    deleteEquipment
}