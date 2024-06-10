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
    const equipment = readEquipmentData(); // Read all equipment items from the file
    res.status(200).json(equipment); // Send the equipment items as JSON response
}

// add a new piece of equipment
const addEquipment = (req, res) => {
    const newEquipment = {
        id: generateID(), // Generate a unique ID for the new equipment item
        number: req.body.number, // Read the equipment number from the request bodyS
        title: req.body.title,
        imagePath: req.body.imagePath || '',
        description: req.body.description,
        availableCount: req.body.availableCount,
        ownerID: req.body.ownerID
}; const equipment = readEquipmentData();
equipment.push(newEquipment); // Add the new equipment item
writeEquipmentData(equipment); // Write the updated equipment data back to the file

res.status(201).json(newEquipment); // Send the new equipment item as JSON response
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