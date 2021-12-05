const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: { type: String, required: true, unique: true, maxlength: 25, minlength: 6 },
    password: { type: String, required: true,  default: 'password', },
    email: { type: String, },

    image: { type: String, default: '', maxlength: 2048 },
    gender: { type: String, default: '', maxlength: 2048},
    birthday: {type: Date, default: '', maxlength: 2048},
    description: {type: String, default: '', maxlength: 5000},
    ban: {type: Boolean, default: false},

    slug: { type: String, slug: 'username', unique: true },

    rpgCharacter: {
        level: {type: Number, default: 1}, // to do: change to a list
        exp: {type: Number, default: 0}, // to do: change to a list
        gold: {type: Number, default: 0},
        diamond: {type: Number, default: 0},
        guild: {type: String, default: ''},
        // item:  {
        //     itemid: {type: String},
        //     quantity: {type: Number},
        //     slotcount: {type: Number},
        // }
    }
}, {
    timestamps: true,
});

usersSchema.pre('save', async function (next){
    try {

    }
    catch{

    }
});
mongoose.plugin(slug);
module.exports = mongoose.model('users', usersSchema);