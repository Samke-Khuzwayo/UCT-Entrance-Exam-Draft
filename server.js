const db = require('./db');

// Runing a simple query to test the connection
//db.query('SELECT 1 + 1 AS solution', (err, results) => {
 //   if (err) throw err;
 //   console.log('Test query result:', results[0].solution); // Should log "2" (successful)
//});


const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Setting up the MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Makhuzwayo2705*', // MySQL password
    database: 'my_Electionsweb_app' // database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Serve the HTML registration form
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/pages-register.html');
});

// Handle the form submission (POST request)
app.post('/register', (req, res) => {
    const { idNumber, name, email, userProvince, userCitizenship, userAddress, userWard, userCellnumber, password,  } = req.body;

    // SQL query to insert the new user into the 'users' table
    const query = 'INSERT INTO users (userID, userNameSurname, userEmail, userProvince, userCitizenship, userAddress, userWard, userCellnumber, userPassword, ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
   
     // Logging the query and values being sent to MySQL
     //console.log('Executing query:', query);
     //console.log('Values:', [idNumber, name, email, userProvince, userCitizenship, userAddress, userWard, userCellnumber, password]);

    connection.query(query, [idNumber, name, email, userProvince, userCitizenship, userAddress, userWard, userCellnumber, password, ], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error registering user');
        }
        console.log('User registered successfully!', results);
        res.send('Registration successful!');
    });
});

app.get('/', (req, res) => {
    console.log('Redirecting to /register');
    res.redirect('/register');
});

// Starting the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



