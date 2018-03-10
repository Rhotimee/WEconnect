import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    message: 'Welocme to Weconnect',
    error: false,
  });
});

module.exports = router;
