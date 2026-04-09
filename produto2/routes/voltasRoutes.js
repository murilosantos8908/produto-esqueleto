const express = require('express');
const router = express.Router();
const voltasController = require('../controllers/voltasControllers');

router.get('/', voltasController.getAllVoltas);
router.post('/', voltasController.createVolta);
router.put('/:id', voltasController.updateVolta);
router.delete('/:id', voltasController.deleteVolta);

router.get('/melhor-volta/:corredorId', voltasController.getMelhorVolta);
router.get('/tempo-total/:corredorId', voltasController.getTempoTotal);
router.get('/quantidade-voltas/:corredorId', voltasController.getQuantidadeVoltas);
router.get('/ranking', voltasController.getRanking);

module.exports = router;