const fs = require('fs');
// read data from json file
let blogs = JSON.parse(fs.readFileSync('./models/borrows.json'));

function generateID() {
    return crypto.randomUUID();
}

// get all of the borrows
const getAllBorrows = (req, res) => {

}

// add a new borrow
const addBorrow = (req, res) => {
    id = generateID();
}

// get one specific borrow by its id
const getBorrow = (req, res) => {

}

// update one specific borrow by its id
const updateBorrow = (req, res) => {

}

// delete one specific borrow by its id
const deleteBorrow = (req, res) => {

}

/*const typeMap = {
    "Borrows": o([
        { json: "id", js: "id", typ: "" },
        { json: "borrowerID", js: "borrowerID", typ: "" },
        { json: "borrowDate", js: "borrowDate", typ: Date },
        { json: "returnDate", js: "returnDate", typ: Date },
        { json: "equipmentID", js: "equipmentID", typ: "" },
    ], false),
};*/

module.exports = {
    getAllBorrows,
    addBorrow,
    getBorrow,
    updateBorrow,
    deleteBorrow
}