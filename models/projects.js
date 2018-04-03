const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: String,
    img: String,
    desc: String,
    team: String,
    advisor: String
});

module.exports = mongoose.model("Project", ProjectSchema);