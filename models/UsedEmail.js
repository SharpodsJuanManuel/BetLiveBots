const mongoose = require("mongoose");

const UsedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: Boolean,
  telegramId: {
    type: String,
    unique: false,
    required: false,
  },
});

const UsedEmail = mongoose.model('usersdiamonds', UsedEmailSchema);

module.exports = UsedEmail;
