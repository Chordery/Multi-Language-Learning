const mongoose = require('mongoose');

// 连接到语法数据库（grammarapp）
const grammarDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/grammarapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接成功的回调
grammarDB.on('connected', () => {
  console.log("✅ Connected to GrammarApp Database");
});

grammarDB.on('error', (err) => {
  console.error('❌ Error connecting to GrammarApp Database:', err);
});

module.exports = grammarDB;
