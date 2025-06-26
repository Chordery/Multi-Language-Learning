const express = require('express');
const router = express.Router();
const User = require('../models/user/User');  // 引入用户模型

// 用户注册
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 检查用户名是否已存在
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: '用户名已存在' });
    }

    // 创建新用户
    const newUser = new User({
      username,
      password,  // 密码需要加密后再存储（使用 bcrypt）
    });

    await newUser.save();
    res.status(201).json({ message: '用户注册成功', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 查询用户信息
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('wordBooks grammarBooks');
    if (!user) {
      return res.status(404).json({ message: '用户未找到' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
