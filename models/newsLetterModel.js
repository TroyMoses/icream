import mongoose from "mongoose"


const newsLetterSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
    }
})

const NewsLetter = mongoose.models.NewsLetter || mongoose.model('NewsLetter', newsLetterSchema);

export default NewsLetter;
