const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));

var router = express.Router();
app.use('/api', router);    //Use prefix /api for all rest calls
router.get('/', function(req, res) {
    res.json({message: 'Welcome to hello api'});
});

app.listen(process.env.PORT || 8080);
console.log(`Listening on port ${process.env.PORT || 8080}` );