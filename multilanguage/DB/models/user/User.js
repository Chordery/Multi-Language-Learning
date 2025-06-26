const mongoose = require('mongoose');
const { userDB } = require('../../db');

// 用户模型
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // 用户名，唯一
  password: { type: String, required: true },  // 用户密码，建议使用加密
  activeDays: { type: Number, default: 0 },  // 用户活跃天数
  wordBooks: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'WordBook' }  // 引用单词本（从 wordBookDB 引用）
  ],
  grammarBooks: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'GrammarBook' }  // 引用语法本（从 grammarBookDB 引用）
  ],
  createdAt: { type: Date, default: Date.now },  // 创建时间
  updatedAt: { type: Date, default: Date.now }   // 更新时间
});

// 用户模型
module.exports = userDB.model('User', UserSchema);
