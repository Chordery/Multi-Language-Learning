const express = require('express');
const router = express.Router();
const Word = require('../models/word/Word');  // 引入模型，确保使用 wordDB 连接

// 添加单词的路由
router.post('/add', async (req, res) => {
  try {
    const newWord = new Word(req.body);
    await newWord.save();
    res.status(201).json({ message: '单词添加成功', word: newWord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 查询所有单词
router.get('/', async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
