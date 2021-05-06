const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubname: { type: String, required: true, unique:true, minlength: 3 },
    shortname: { type: String, required: true, maxlength: 3 },
    founded: { type: Number, minlength:4 },
    country: { type: String, required: true },
    league: {type: String, required: true},
    description: {type:String}
    }, {
        timestamps: true
});

const Club = mongoose.model('Clubs', clubSchema);

module.exports = Club;