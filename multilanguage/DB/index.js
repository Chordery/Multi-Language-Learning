const express = require('express');
const { wordDB, grammarDB, wordBookDB, grammarBookDB, userDB } = require('./db');  // 引入数据库连接
const wordRoutes = require('./routes/word');
const grammarRoutes = require('./routes/grammar');
const wordBookRoutes = require('./routes/wordbook');
const grammarBookRoutes = require('./routes/grammarbook');
const userRoutes = require('./routes/user');  // 引入用户路由

const app = express();

// 确保连接到数据库
wordDB;
grammarDB;
wordBookDB;
grammarBookDB;   // 连接到语法本数据库
userDB;

// 解析 JSON 格式的请求体
app.use(express.json());

// 路由配置
app.use('/api/words', wordRoutes);       // 词汇路由
app.use('/api/grammar', grammarRoutes);  // 语法路由
app.use('/api/wordbooks', wordBookRoutes);  // 单词本路由
app.use('/api/grammarbooks', grammarBookRoutes);  // 语法本路由
app.use('/api/users', userRoutes);  // 用户路由

// 设置端口并启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});
