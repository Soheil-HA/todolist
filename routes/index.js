const express = require('express');

const todosConteroller = require('../controllers/todos');

const router = express.Router();

router.get('/', todosConteroller.getIndex);

module.exports = router;