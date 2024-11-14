const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('../client'));

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'artshop_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Sign-Up Route
app.post('/sign-up', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: 'User registration failed' });
        res.json({ message: 'User registered successfully' });
    });
});

// Sign-In Route
app.post('/sign-in', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, results[0].password);
        if (isMatch) {
            res.json({ message: 'Sign-in successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
