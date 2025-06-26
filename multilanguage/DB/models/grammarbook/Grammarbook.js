const mongoose = require('mongoose');
const { grammarBookDB } = require('../../db');  // 引入单词本数据库连接

// 创建语法本模型
const GrammarBookSchema = new mongoose.Schema({
  name: { type: String, required: true },   // 语法本名称
  creator: { type: String, required: true }, // 创建人
  language: { type: String, required: true }, // 语法的语言
  themes: [
    {
      themeName: { type: String, required: true },  // 语法主题名称
      points: [
        {
          pointId: { type: mongoose.Schema.Types.ObjectId, ref: 'GrammarPoint', required: true }, // 引用语法点模型
        }
      ]
    }
  ],
  createdAt: { type: Date, default: Date.now }   // 创建时间
});

module.exports = grammarBookDB.model('GrammarBook', GrammarBookSchema);
