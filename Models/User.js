import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    dateCreated: {
        default: Date.now(),
        type: Date
    }
})

const User = mongoose.model("users", UserSchema)

export default User