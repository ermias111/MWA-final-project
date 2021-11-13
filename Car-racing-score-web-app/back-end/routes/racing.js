const express = requrie('express');
const router = express.Router();
const { handleDelete, handlePost, handleGetById, handleGetAll } = require('../controller/racing');


router.get('/', handleGetAll)

router.get('/:id', handleGetById)

router.post('/', handlePost)

router.delete('/:id', handleDelete)


module.exports = router;