const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  favouriteLocs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location"
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
