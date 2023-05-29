const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
  res.send('Aqui é a rota de artigos');
});

module.exports = router;
