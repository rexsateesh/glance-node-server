const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const { response, getDaysDiff } = require('../utils/helper');

router.get('/', (req, res, next) => {
  res.json(response('Reports'));
});

router.post('/', (req, res) => {
  // Error if file not found
  if (req.files === null || typeof req.files.csv === 'undefined') {
    return res.status(422).json(response('Please upload file.'));
  }

  let { ndays } = req.body; // Extract params
  ndays = ndays === undefined || ndays <= 0 ? 7 : parseInt(ndays); // If ndays undefined or less than 0 then assign ddefault value

  const results = [];
  const currentDate = new Date();

  // Reading CSV file uploaded by client
  fs.createReadStream(req.files.csv.tempFilePath)
    .pipe(csv()) // Adding CSV parser
    .on('data', data => results.push(data)) // Pushing data into results
    .on('end', () => {
      const report = results.filter(item => getDaysDiff(new Date(item.date), currentDate) >= ndays); // Filter data based on days difference
      res.json(response('Uploaded success', report));
    });
})

module.exports = router;
