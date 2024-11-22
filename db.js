const mysql = require('mysql2');

// Creating the connection to the database
const connection = mysql.createConnection({
    host: 'localhost', // or your database host
    user: 'root', // MySQL username 
    password: 'Makhuzwayo2705*', // MySQL password 
    database: 'my_Electionsweb_app' // actual database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Export the connection to use in other files
module.exports = connection;
