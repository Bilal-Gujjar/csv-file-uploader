const csv = require('fast-csv');
const Data = require('../models/dataModel');
const {faker} = require('@faker-js/faker')


exports.uploadData = (req, res) => {
  let datas = [];
  csv.parseString(req.file.buffer.toString(), {
    headers: true,
    ignoreEmpty: true
  }).on('data', (data) => {
    datas.push(data);
  }).on('end', () => {
    if (datas.length < 20) {
      return res.status(400).json({ error: 'Minimum 20 records required' });
    }
    
    Data.bulkCreate(datas, {
      updateOnDuplicate: ["name", "contact"]
    }).then(() => {
      res.status(201).json({ message: 'Data uploaded successfully' });
    }).catch((error) => {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    });
  });
}

exports.generateData = (req, res) => {

  
  let datas = [];

  for (let i = 0; i < 20; i++) {
    datas.push({
      id: faker.string.uuid(),
      name: faker.internet.userName(),
      contact: faker.phone.number('###-###-####'),
    });
  }

  Data.bulkCreate(datas).then(() => {
    res.status(201).json({ message: 'Data generated successfully' });
  });
}

exports.getData = (req, res) => {
  Data.findAll().then((datas) => {
    res.status(200).json(datas);
  });
}
