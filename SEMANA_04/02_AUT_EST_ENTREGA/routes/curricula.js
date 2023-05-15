// Express
var express = require('express');
var router = express.Router();

// GET /curricula
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM curricula'

    req.db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(200).json(rows);
    });
});

// GET/curricula/:id
router.get('/:id', (req, res, next) => {
    const sql = 'SELECT * FROM curricula WHERE curriculum_id = ?'

    req.db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(400).json({error: err.message});
        }

        if (row === undefined) return res.sendStatus(404);

        res.status(200).json(row);
    });
});

// POST /curricula
router.post('/', (req, res, next) => {
    const {first_name, last_name, role, gravatar_URL, address, phone_number, email, biography} = req.body;
    const sql = 'INSERT INTO curricula(first_name, last_name, role, gravatar_URL, address, phone_number, email, biography) VALUES (?, ?, ?)'

    req.db.run(sql, [first_name, last_name, role, gravatar_URL, address, phone_number, email, biography], function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(201).json({id: this.lastID});
    });
});

// PUT /curricula/:id
router.put('/:id', (req, res, next) => {
    const {first_name, last_name, role, gravatar_URL, address, phone_number, email, biography} = req.body;
    const sql = "UPDATE curricula SET first_name = ?, last_name = ?, role = ?, gravatar_URL = ?, address = ?, phone_number = ?, email = ?, biography = ? WHERE curriculum_id = ?";

    req.db.run(sql, [first_name, last_name, role, gravatar_URL, address, phone_number, email, biography], function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(200).json({changes: this.changes});
    });
});

// DELETE /curricula/:id
router.delete('/:id', (req, res, next) => {
    const sql = 'DELETE FROM curricula WHERE curriculum_id = ?'

    req.db.run(sql, req.params.id, function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(200).json({deleted: this.changes});
    });
});

module.exports = router;
