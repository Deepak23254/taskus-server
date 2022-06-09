var express = require('express');
var router = express.Router();
const Users = require("../models/users.model");

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const data = await Users.find();        
  res.status(200).json({data:data});
});

router.get('/:id', async(req, res, next) => {
  let id = req.params.id;
  const data = await Users.findById(id);
  res.status(200).json({data:data});
});

router.post('/', function(req, res, next) {
  const data = new Users({
    name:'jasdeep singh',
    email:'singhjazz88@gmail.com',
    phone:9034162706,
    age:28
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
});

module.exports = router;
