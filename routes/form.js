const express = require('express');
const router = express.Router();
const formController = require('../controllers/form');

router.post('/', formController.postExpense);

router.get('/', formController.getExpense);

router.delete('/delete/:id', formController.deleteExpense);



module.exports = router;