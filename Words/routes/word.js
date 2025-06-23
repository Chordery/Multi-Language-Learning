const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

// 添加新单词
router.post('/add', async (req, res) => {
  try {
    const newWord = new Word(req.body);
    await newWord.save();
    res.status(201).json({ message: '单词添加成功', word: newWord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取全部单词
router.get('/', async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
