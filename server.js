const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados SQLite');
        createTable();
    }
});

function createTable() {
    db.run(`CREATE TABLE IF NOT EXISTS registros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricula TEXT NOT NULL,
        curso TEXT NOT NULL,
        semestre TEXT NOT NULL,
        disciplina TEXT NOT NULL
    )`);
}

app.post('/registros', (req, res) => {
    const { matricula, curso, semestre, disciplina } = req.body;

    if (!matricula || !curso || !semestre || !disciplina) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const sql = `INSERT INTO registros (matricula, curso, semestre, disciplina) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [matricula, curso, semestre, disciplina], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            id: this.lastID,
            matricula,
            curso,
            semestre,
            disciplina
        });
    });
});


app.get('/registros', (req, res) => {
    const sql = `SELECT * FROM registros`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.delete('/registros', (req, res) => {
    const sql = `DELETE FROM registros`;
    
    db.run(sql, [], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ 
            message: 'Todos os registros foram apagados com sucesso',
            deletedCount: this.changes
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 