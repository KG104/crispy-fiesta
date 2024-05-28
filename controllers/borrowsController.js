const fs = require('fs');
// read data from json file
let blogs = JSON.parse(fs.readFileSync('./models/borrows.json'));

// get all of the borrows
const getAllBorrows = (req, res) => {

}

// add a new borrow
const addBorrow = (req, res) => {

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

module.exports = {
    getAllBorrows,
    addBorrow,
    getBorrow,
    updateBorrow,
    deleteBorrow
}