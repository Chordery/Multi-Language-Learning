const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  partOfSpeech: { type: String },
  definition: { type: String },
  sourcedefinition: { type: String },

  // 例句与释义
  examples: [
    {
      sentence: { type: String, required: true },
      meaning: { type: String, required: true }
    }
  ],

  // 词组与释义
  phrases: [
    {
      phrase: { type: String, required: true },
      meaning: { type: String, required: true }
    }
  ],

  // 词形变化
  forms: {
    plural: { type: String, default: null },
    thirdPerson: { type: String, default: null },
    presentParticiple: { type: String, default: null },
    pastTense: { type: String, default: null },
    pastParticiple: { type: String, default: null },
    comparative: { type: String, default: null },
    superlative: { type: String, default: null }
  },

  similarForms: [String],
  rootForms: [String],
  synonyms: [String],
  antonyms: [String],
  sourceLang: { type: String, default: 'en' },
  targetLang: { type: String, default: 'zh' },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Word', WordSchema);
