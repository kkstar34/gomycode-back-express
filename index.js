let express = require("express");
let bodyParser = require("body-parser");



let app = express();

app.use(bodyParser.json())

let router = express.Router();

var users = [
    {id : 1, name : "kouyate karim", email : "kouyatekarim02@gmail.com"},
    {id : 2, name : "Didier Dakoury", email : "didier@gmail.com"},
    {id : 3, name : "Yvan Cesar", email : "Yvan@gmail.com"}
];



app.get('/users', function (req, res) {
    res.json(users);
})

app.put('/user/:id', function (req, res) {

    let user_id = parseInt(req.params.id);
    let index = users.findIndex((user) => user.id === user_id);
    users[index].name = req.body.name;
    res.json(users[index]);
})

app.delete('/user/:id', function (req, res)
{


    let user_id = parseInt(req.params.id);
    let index = users.findIndex((user) => user.id === user_id);
    users.splice(index, 1);
    res.json(users)

})






// app.use(routes)


app.listen(4000, () => {
    console.log("Server lancé sur le port 4000")
})