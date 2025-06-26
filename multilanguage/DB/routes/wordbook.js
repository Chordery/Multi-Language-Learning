const express = require('express');
const router = express.Router();
const WordBook = require('../models/wordbook/WordBook');  // 引入 WordBook 模型

// 创建单词本
router.post('/add', async (req, res) => {
  try {
    const newWordBook = new WordBook(req.body);
    await newWordBook.save();
    res.status(201).json({ message: '单词本创建成功', wordBook: newWordBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取所有单词本
router.get('/', async (req, res) => {
  try {
    const wordBooks = await WordBook.find();
    res.json(wordBooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取单个单词本
router.get('/:id', async (req, res) => {
  try {
    const wordBook = await WordBook.findById(req.params.id);
    if (!wordBook) return res.status(404).json({ message: '单词本未找到' });
    res.json(wordBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
