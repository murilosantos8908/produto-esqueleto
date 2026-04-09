const express = require('express');
const router = express.Router();
const corredoresController = require('../controllers/corredoresControllers');

router.get('/', corredoresController.getAllCorredores);
router.post('/', corredoresController.createCorredor);
router.put('/:id', corredoresController.updateCorredor);
router.delete('/:id', corredoresController.deleteCorredor);

router.get('/ranking', corredoresController.getRanking);

module.exports = router;