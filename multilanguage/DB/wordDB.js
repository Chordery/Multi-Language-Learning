const mongoose = require('mongoose');

// 连接到词汇数据库（wordapp）
const wordDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/wordapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接成功的回调
wordDB.on('connected', () => {
  console.log("✅ Connected to WordApp Database");
});

wordDB.on('error', (err) => {
  console.error('❌ Error connecting to WordApp Database:', err);
});

module.exports = wordDB;
