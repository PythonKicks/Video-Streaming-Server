const mongoose = require('mongoose');

const partySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    viewerIds: {type: [String], required: true},
    sourceData: {
        sourceUrl: {type: String, required: true},
        runTimeSeconds: {type: Number, required: true},
        srtId: {type: String, required: false}
    },
    hostId: {type: String, required: true},
    inviteCode: {type: String, required: true},
    capacity: {type: Number, required: true, min: 2, max: 12}
});

module.exports = mongoose.model('Party', partySchema);