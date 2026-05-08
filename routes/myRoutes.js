const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

router.get('/salario', myController.getSalario);
router.get('/salario-liquido', myController.getSalarioLiquido);
router.post('/salario',myController.saveSalario);
router.get('/user', myController.getUser); 
router.post('/user',myController.saveUser);

module.exports = router;