const express = require('express');
const connectDB = require('./db');
const wordRoutes = require('./routes/word');

const app = express();

// 连接数据库
connectDB();

// 允许使用 JSON 格式请求体
app.use(express.json());

// 使用路由处理单词相关的 API 请求
app.use('/api/words', wordRoutes);

// 设置监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});
