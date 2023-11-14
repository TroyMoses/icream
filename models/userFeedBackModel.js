import mongoose from "mongoose";

const userFeedBackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
    },
    subject: {
        type: String,
        required: [true, 'Please provide the subject'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Please provide your message'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const UserFeedBack = mongoose.models.UserFeedBack || mongoose.model('UserFeedBack', userFeedBackSchema);

export default UserFeedBack;


