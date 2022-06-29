const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  comments: [
    {
      author: {
        type: String,
        required: true,
      },
      text: String,
    },
  ],
});

module.exports = mongoose.model("Location", LocationSchema);
