const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
  res.send('Aqui é a rota de categorias');
});

module.exports = router;
