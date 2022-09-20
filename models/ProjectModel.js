const mongoose =  require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: String,
    artist: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Projects", ProjectSchema);