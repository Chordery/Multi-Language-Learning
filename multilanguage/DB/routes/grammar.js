const express = require('express');
const router = express.Router();
const GrammarPoint = require('../models/grammar/GrammarPoint');  // 引入模型，确保使用 grammarDB 连接

// 添加语法点的路由
router.post('/add', async (req, res) => {
  try {
    const newGrammarPoint = new GrammarPoint(req.body);
    await newGrammarPoint.save();
    res.status(201).json({ message: '语法点添加成功', grammarPoint: newGrammarPoint });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 查询所有语法点
router.get('/', async (req, res) => {
  try {
    const grammarPoints = await GrammarPoint.find();
    res.json(grammarPoints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
