const mongoose = require('mongoose');
const { grammarDB } = require('../../db');  // 引入正确的数据库连接

const GrammarPointSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  examples: [
    {
      sentence: { type: String, required: true },
      meaning: { type: String, required: true }
    }
  ],
  sourceLang: { type: String, default: 'en' },
  targetLang: { type: String, default: 'zh' }
});

module.exports = grammarDB.model('GrammarPoint', GrammarPointSchema);
