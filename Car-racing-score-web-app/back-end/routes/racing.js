const express = require('express');
const router = express.Router();
const { handleDelete, handlePost, handleGetById, handleGetAll, handleAddResult } = require('../controller/racing');
const { verifyUserToken, isUser, isAdmin } = require('../security/authorize');

router.get('/',verifyUserToken, handleGetAll)

router.get('/:id',verifyUserToken, handleGetById)

router.post('/', verifyUserToken, isAdmin, handlePost)

router.patch('/addresult/:id', verifyUserToken, isAdmin, handleAddResult)

router.delete('/:id', verifyUserToken, isAdmin, handleDelete)


module.exports = router;