const mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema(
    {   id: Number,
        fullName : String,
        urlImage : String,
        cast : {
            type: [String]
        }
    }
)

module.exports = mongoose.model('ChillMovie', MovieSchema)