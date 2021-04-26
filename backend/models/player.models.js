const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playername: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    nationality: { type: String, required:true },
    contract: { type: Number, required: true },
    club: { type:String, required: true},
    club_id: {type: String },
}, {
    timestamps: true,
});

const PlayerModel = mongoose.model('Players', playerSchema);

module.exports = PlayerModel;