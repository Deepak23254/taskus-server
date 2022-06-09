var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const message = req.body.messageValue;

    res.status(200).json({
                        type:{
                            textAlign:'right'
                        },
                        message:message+' 1',
                        options:[{
                            "content":"product 1",
                            "url":"https://cloudeq.com/",
                        },
                        {
                            "content":"product 2",
                            "url":"https://cloudeq.com/",
                        },
                        {
                            "content":"product 2",
                            "url":"https://cloudeq.com/",
                        }]
                    });
});

module.exports = router;