var express = require('express');
var router = express.Router();
const Widget = require("../models/widget.model");

/* GET All Widgets. */
router.get('/', async (req, res, next) => {
    const data = await Widget.find();
    res.status(200).json({data:data})
});

/* GET single Widgets. */
router.get('/:id', async(req, res, next) => {
  let id = req.params.id;
  
  const data = await Widget.findOne({'user_id':id});
  res.status(200).json({data:data});
});

/* POST data for Widgets. */
router.post('/', async function(req, res, next) {
  const user_id = req.body.user_id;
  delete req.body.user_id;

  try {
    let checkIfExists = await Widget.findOne({"user_id":user_id});     //check in exists
    console.log(checkIfExists);
    if(checkIfExists !== null){       //update
      const updateData = await Widget.updateOne({"user_id":user_id},{properties:req.body});
      if(!updateData){
        res.status(200).json({msg:"something went wrong"});
      }
      res.status(200).json({msg:"Successfully Updated"});
    }else{  //insert
      var widgetData = new Widget({user_id:user_id,properties:req.body});
      const dataToSave = await widgetData.save();

      if(!dataToSave){
        res.status(200).json({msg:"something went wrong"});
      }
      res.status(200).json({msg:"Successfully Inserted"});
    }
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});

module.exports = router;