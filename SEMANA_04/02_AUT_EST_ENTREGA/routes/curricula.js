// Express
var express = require('express');
var router = express.Router();

// GET /activities
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM activities'

    req.db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(200).json(rows);
    });
});

// GET/activities/:id
router.get('/:id', (req, res, next) => {
    const sql = 'SELECT * FROM activities WHERE id = ?'

    req.db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(400).json({error: err.message});
        }

        if (row === undefined) return res.sendStatus(404);

        res.status(200).json(row);
    });
});

// POST /activities
router.post('/', (req, res, next) => {
    const {name, user_id, classroom_id} = req.body;
    const sql = 'INSERT INTO activities(name, user_id, classroom_id) VALUES (?, ?, ?)'

    req.db.run(sql, [name, user_id, classroom_id], function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(201).json({id: this.lastID});
    });
});

// PUT /activities/:id
router.put('/:id', (req, res, next) => {
    const {name, user_id, classroom_id} = req.body;
    const sql = "UPDATE activities SET name = ?, user_id = ?, classroom_id = ? WHERE id = ?";

    req.db.run(sql, [name, user_id, classroom_id, req.params.id], function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(200).json({changes: this.changes});
    });
});

// DELETE /activities/:id
router.delete('/:id', (req, res, next) => {
    const sql = 'DELETE FROM activities WHERE id = ?'

    req.db.run(sql, req.params.id, function (err) {
        if (err) {
            return res.status(400).json({error: err.message});
        }
        res.status(200).json({deleted: this.changes});
    });
});

module.exports = router;
