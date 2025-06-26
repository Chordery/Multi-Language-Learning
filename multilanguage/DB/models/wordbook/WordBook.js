const mongoose = require('mongoose');
const { wordBookDB } = require('../../db');  // 引入单词本数据库连接

const WordBookSchema = new mongoose.Schema({
  name: { type: String, required: true }, // 单词本名称
  creator: { type: String, required: true }, // 单词本创建者
  language: { type: String, required: true }, // 单词本语言
  words: [
    {
      wordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Word', required: true }, // 引用单词详情模型
      learningStatus: { type: String, enum: ["未学习", "待复习", "已掌握"], default: "未学习" } // 学习状态
    }
  ],
  createdAt: { type: Date, default: Date.now } // 单词本创建时间
});

module.exports = wordBookDB.model('WordBook', WordBookSchema);  // 使用 wordBookDB 连接
