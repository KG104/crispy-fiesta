
const fs = require('fs');
const crypto = require('crypto');
// read data from json file
let blogs = JSON.parse(fs.readFileSync('./models/equipment.json'));


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

//Function to generate Date format
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
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
        ownerID: req.body.ownerID,
        EANNumber: req.body.EANNumber,
        buyDate: formatDate(new Date())
    }
    // check if number is 13 numbers long
    if (EanCheck.length !== 13 || isNaN(EanCheck)) {
        return res.status(400).json({ message: "EAN Number must be 13 digits long!" });
    }
}; 
const equipment = readEquipmentData();


equipment.push(newEquipment); // Add the new equipment item
writeEquipmentData(equipment); // Write the updated equipment data back to the file

res.status(201).json(newEquipment); // Send the new equipment item as JSON response

// get one piece of equipment by its id
const getEquipment = (req, res) => {
    const equipment = readEquipmentData(); // Read all equipment items from the file
    const item = equipment.find(e => e.id === req.params.id); // Find the equipment item with the specified ID
    
    if (!item) { // If no equipment item is found
        return res.status(404).json({ message: 'Equipment not found' }); // Send an error message
    }

    res.status(200).json(item); // Send the found equipment item as JSON response
}

//get one specific piece of eqipment by Year
const getEquipmentByYear = (req, res) => {
    const equipment = readEquipmentData();
    var searchedEquipmentbyYear = equipment.find(element => element.year === req.params.year);
    // if the Equipment Year could be found
    if (searchedEquipmentbyYear !== undefined) res.status(200).json(searchedEquipmentByYear);
    else res.status(404).send("Equipment-Year could not be found ):");
}

//get one specific piece of eqipment by Month
const getEquipmentByMonth = (req, res) => {
    const equipment = readEquipmentData();
    var searchedEquipmentbyMonth = equipment.find(element => element.month === req.params.month);
    // if the Equipment-Month could be found
    if (searchedEquipmentbyMonth !== undefined) res.status(200).json(searchedEquipmentByMonth);
    else res.status(404).send("Equipment-Month could not be found ):");
}

//get one specific piece of eqipment by Year and Month
const getEquipmentByYearAndMonth = (req, res) => {
    const equipment = readEquipmentData();
    var searchedEquipmentbyYearAndMonth = equipment.find(element => element.year === req.params.year) + equipment.find(element => element.month === req.params.month);
    // if the Equipment-Year and could be foundy
    if (searchedEquipmentbyYearAndMonth !== undefined) res.status(200).json(searchedEquipmentByYearAndMonth);
    else res.status(404).send("Equipment-Year-Month could not be found ):");
}


// update one specific piece of equipment by its id
const updateEquipment = (req, res) => {
    const equipment = readEquipmentData(); // Read all equipment items from the file
    const index = equipment.findIndex(e => e.id === req.params.id); // Find the index of the equipment item with the specified ID
    
    if (index === -1) { // If no equipment item with the specified ID is found
        return res.status(404).json({ message: 'Equipment not found' }); // Send an error message
    }

// 



// Update the existing equipment item
const updatedEquipment = {
    ...equipment[index],
    number: req.body.number || equipment[index].number,
    title: req.body.title || equipment[index].title,
    imagePath: req.body.imagePath || equipment[index].imagePath,
    description: req.body.description || equipment[index].description,
    availableCount: req.body.availableCount || equipment[index].availableCount,
     ownerID: req.body.ownerID || equipment[index].ownerID,
     EANNumber: req.body.EANNumber || equipment[index].EANNumber,
     buyDate: req.body.EANNumber || equipment[index].buyDate
};
equipment[index] = updatedEquipment; // Update the equipment item in the array
 writeEquipmentData(equipment); // Write the updated equipment data back to the file

 res.status(200).json(updatedEquipment); // Send the updated equipment item as JSON response
}

// delete one specific piece of equipment by its id
const deleteEquipment = (req, res) => {
    const equipment = readEquipmentData(); // Read all equipment items from the file
    const updatedEquipment = equipment.filter(e => e.id !== req.params.id); // Filter out the equipment item with the specified ID
    
    if (equipment.length === updatedEquipment.length) { // If no equipment item with the specified ID is found
        return res.status(404).json({ message: 'Equipment not found' }); // Send an error message
    }

    writeEquipmentData(updatedEquipment); // Write the updated equipment data back to the file
    res.status(204).send(); // Send an empty response to confirm success

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
    getEquipmentByYear,
    getEquipmentByMonth,
    getEquipmentByYearAndMonth,
    updateEquipment,
    deleteEquipment
}
