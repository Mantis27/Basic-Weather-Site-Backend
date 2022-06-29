const mongoose = require("mongoose");

const WeatherSchema = mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    },
    temp_c: Number,
    wind_kph: Number,
    wind_dir: String,
    humidity: Number,
    precip_mm: Number,
    vis_km: Number
});

module.exports = mongoose.model("Weather", WeatherSchema);
