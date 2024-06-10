
const fs = require('fs');
const crypto = require('crypto');

// read data from json file
let borrows = JSON.parse(fs.readFileSync('./models/borrows.json'));

function generateID() {
    return crypto.randomUUID();
}

// get all of the borrows
const getAllBorrows = (req, res) => {
    res.json(borrows);
}

// add a new borrow
const addBorrow = (req, res) => {
    const { userID, borrowDate, returnDate, equipmentID } = req.body;
    
    if (!userID || !borrowDate || !returnDate || !equipmentID) {
        return res.status(404).json({ message: "Incomplete data" });
    }
    
     const id = generateID();
     let addBorrow = {
         borrowID: id,
         userID,
         borrowDate,
         returnDate,
         equipmentID
     };
    
    borrows.push(addBorrow);
     fs.writeFileSync('./models/borrows.json', JSON.stringify(borrows, null, 2));
     res.status(200).json(addBorrow);
}

// get one specific borrow by its id
const getBorrow = (req, res) => {
    const borrowID = req.params.id;
    const searchedBorrow = borrows.find(elementb => elementb.borrowID === borrowID);
    if (!searchedBorrow) {
        return res.status(404).json({ message: "Borrow not found" });
    }
    res.status(200).json(searchedBorrow);
}

// update one specific borrow by its id
const updateBorrow = (req, res) => {
    borrows = JSON.parse(fs.readFileSync('./models/borrows.json'));
    var borrowToUpdate = borrows.find(elementb => elementb.borrowID == req.params.id);
    console.log(borrows);
    // if a user with this id exists
    if (borrowToUpdate !== undefined) {
        // update the keys
        borrowToUpdate.userID = req.body.userID;
        borrowToUpdate.equipmentID = req.body.equipmentID;
        fs.writeFileSync('./models/borrows.json', JSON.stringify(borrows, null, 2));
        res.status(200).json(borrows);
    } else res.status(404).send("Der gesuchte Ausleihvorgang existiert nicht ):");

}

// delete one specific borrow by its id
const deleteBorrow = (req, res) => {
    // filter out the borrow with the specified id
    borrows = borrows.filter(elementb => elementb.borrowID !== req.params.id);
    // overwrite the json file 
    fs.writeFileSync('./models/borrows.json', JSON.stringify(borrows, null, 2));
    res.status(200).json(borrows);

}


module.exports = {
    getAllBorrows,
    addBorrow,
    getBorrow,
    updateBorrow,
    deleteBorrow
}
