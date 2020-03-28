const mongoose = require('mongoose');

const viewerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    displayName: {type: String, required: true},
    token: {type: String, required: true},
    isHost: {type: Boolean, required: true}
});

module.exports = mongoose.model('Viewer', viewerSchema);