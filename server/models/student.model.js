const studentSchema = new Schema({
    sid: Number,
    name: String,
    standard: String
})

module.exports = mongoose.model('student', studentSchema, 'students')