require('dotenv').config();
const express = require('express');
const pool = require('./config/db.js');

const app = express();
app.use(express.json());

app.get('/db', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT NOW() AS fecha');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send("Mi backEnd con ExpressJS");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
