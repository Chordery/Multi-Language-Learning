const express = require('express');
const router = express.Router();
const GrammarBook = require('../models/grammarbook/GrammarBook');  // 引入语法本模型

// 创建语法本
router.post('/add', async (req, res) => {
  try {
    const newGrammarBook = new GrammarBook(req.body);
    await newGrammarBook.save();
    res.status(201).json({ message: '语法本创建成功', grammarBook: newGrammarBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取所有语法本
router.get('/', async (req, res) => {
  try {
    const grammarBooks = await GrammarBook.find();
    res.json(grammarBooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取单个语法本
router.get('/:id', async (req, res) => {
  try {
    const grammarBook = await GrammarBook.findById(req.params.id);
    if (!grammarBook) return res.status(404).json({ message: '语法本未找到' });
    res.json(grammarBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
