const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

let mydata = fs.readFileSync('prenoms.txt').toString().split("\n");
console.log(mydata);


//Affiche mon fichier HTML 
app.get("/", function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(err, data){
        // if(err) throw err;
        res.end(data);
    });
});

// });
//##########  ##########
//Affiche tout les éléments contenue dans mon tableau parkings
app.get('/url/', function(req, res) {
    let fin = req.query.k.length
    let result = mydata.filter( n => n.substring(0, fin) == req.query.k)
    console.log(result)
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.send(result);
    });
 
app.listen(port);
console.log('Server started at http://localhost:' + port);
