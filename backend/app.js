let express = require('express'),
    app = express(),
    port = 3000;
    //bodyParser = require('body-parser');
    
const numbers = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
}

app.get('/api', function(req, res){
    res.send(numbers);
});

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})