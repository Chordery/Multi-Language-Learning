const mongoose = require('mongoose');

// 连接到词汇数据库（wordapp）
const wordDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/wordapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接到语法数据库（grammarapp）
const grammarDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/grammarapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接到单词本数据库（wordbookapp）
const wordBookDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/wordbookapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接到语法本数据库（grammarbookapp）
const grammarBookDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/grammarbookapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接到用户数据库（userapp）
const userDB = mongoose.createConnection('mongodb+srv://Jerry:Shu22122781@multilanguage.cxdyryp.mongodb.net/userapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接成功的回调
wordDB.on('connected', () => {
  console.log("✅ Connected to WordApp Database");
});
grammarDB.on('connected', () => {
  console.log("✅ Connected to GrammarApp Database");
});
wordBookDB.on('connected', () => {
  console.log("✅ Connected to WordBook Database");
});
grammarBookDB.on('connected', () => {
  console.log("✅ Connected to GrammarBook Database");
});
userDB.on('connected', () => {
  console.log("✅ Connected to User Database");
});

// 连接失败的回调
wordDB.on('error', (err) => {
  console.error('❌ Error connecting to WordApp Database:', err);
});
grammarDB.on('error', (err) => {
  console.error('❌ Error connecting to GrammarApp Database:', err);
});
wordBookDB.on('error', (err) => {
  console.error('❌ Error connecting to WordBook Database:', err);
});
grammarBookDB.on('error', (err) => {
  console.error('❌ Error connecting to GrammarBook Database:', err);
});
userDB.on('error', (err) => {
  console.error('❌ Error connecting to User Database:', err);
});

// 导出所有数据库连接
module.exports = { wordDB, grammarDB, wordBookDB, grammarBookDB, userDB };
