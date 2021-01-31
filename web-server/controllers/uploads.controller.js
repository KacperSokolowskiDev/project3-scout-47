// const { Document } = require('../models/index');
// const fs = require('fs');
// var http = require('http');
const { Player } = require("../models");

const formidable = require('formidable');


const saveSchoolReport = async (req, res) => {
    const { id } = req.params
    console.log(id)
    console.log("in save school report")
    console.log(req.file.path)

    try {
        console.log("in try")
        const player = await Player.update({ schoolReport: req.file.path}, {
            where: {
              id
            }});
          console.log(player)
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json(error.toString())
    }
}

// const getUserDocuments = (req, res) => {
//     const { userId } = req.params
//     Document
//         .find({ user: userId })
//         .then(result => {
//             res.send(result)
//         })
//         .catch(err => res.status(400).send(err))
//     ;  
// }

// const getDocument = (req, res) => {
//     const { path } = req.params   //Not a good idea to name url params path, and to use path as a variable in a Node.

//     const fileName = path
//     const filePath = process.cwd() + '/uploads/' + fileName; // there is something better to do than process.cwd()

//     const document = fs.readFileSync(filePath);

//     res.contentType("application/pdf");
//     res.send(document);
//     //Todo: Handling error
// }

module.exports = { 
    saveSchoolReport,

};