const express = require('express');
const router = express.Router()
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '508507',
    key: '313043d5093a413702e2',
    secret: 'b7e9b25f4cb7f2c83f27',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/', (req,res) => {
    res.send('poll');
});

router.post('/', (req,res) => {
    pusher.trigger('os-pole', 'os-vote', {
        points:1 ,
        os:req.body.os
      }) 
      res.json({success :true, message :'thanks for voting'})
});

module.exports = router;

