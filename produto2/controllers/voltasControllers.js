const db = require('../db');

exports.getAllVoltas = async (req, res) => {
  try {
    const [voltas] = await db.query('SELECT * FROM voltas');
    res.json(voltas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVolta = async (req, res) => {
  try {
    const { corredorId, tempo } = req.body;
    await db.query('INSERT INTO voltas (corredorId, tempo) VALUES (?, ?)', [corredorId, tempo]);
    res.status(201).json({ message: 'Volta created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVolta = async (req, res) => {
  try {
    const { id } = req.params;
    const { corredorId, tempo } = req.body;
    await db.query('UPDATE voltas SET corredorId = ?, tempo = ? WHERE id = ?', [corredorId, tempo, id]);
    res.json({ message: 'Volta updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVolta = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM voltas WHERE id = ?', [id]);
    res.json({ message: 'Volta deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMelhorVolta = async (req, res) => {
  try {
    const { corredorId } = req.params;
    const [result] = await db.query(
      'SELECT MIN(tempo) AS melhorVolta FROM voltas WHERE corredorId = ?',
      [corredorId]
    );
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tempo total de um corredor
exports.getTempoTotal = async (req, res) => {
  try {
    const { corredorId } = req.params;
    const [result] = await db.query(
      'SELECT SUM(tempo) AS tempoTotal FROM voltas WHERE corredorId = ?',
      [corredorId]
    );
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Quantidade de voltas de um corredor
exports.getQuantidadeVoltas = async (req, res) => {
  try {
    const { corredorId } = req.params;
    const [result] = await db.query(
      'SELECT COUNT(*) AS quantidadeVoltas FROM voltas WHERE corredorId = ?',
      [corredorId]
    );
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ranking dos corredores (ordenado pelo menor tempo total)
exports.getRanking = async (req, res) => {
  try {
    const [result] = await db.query(`
      SELECT c.id, c.name, SUM(v.tempo) AS tempoTotal
      FROM corredores c
      JOIN voltas v ON c.id = v.corredorId
      GROUP BY c.id, c.name
      ORDER BY tempoTotal ASC
    `);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};