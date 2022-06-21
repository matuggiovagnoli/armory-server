const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    hoost: 'localhost',
    password: '654321',
    database: 'armory_db',

});

app.post('/User/register', (req, res) => {
    const first_name = req.body.firstname
    const last_name = req.body.lastname
    const date_of_birth = req.body.dateofbirth
    const e_mail = req.body.email
    const pass = req.body.password

    db.query(
        "INSERT INTO users(first_name,last_name,date_of_birth,e_mail,pass)VALUES(?,?,?,?,?)",
        [first_name,last_name,date_of_birth,e_mail,pass],
        (err,result ) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        });
});

app.get('/User', (req,res) => {
    db.query("SELECT e_mail FROM users"), (err, result) => {
        if (err) {
            console.log(err)
        }else {
            
        }
    }
})

app.listen(3001, () => {
    console.log('el server funciona en el puerto 3001');
});