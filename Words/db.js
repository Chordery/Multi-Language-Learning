const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Jerry:Shu22122781@words.f3eas6i.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Atlas 已连接");
  } catch (err) {
    console.error("❌ MongoDB 连接失败:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
