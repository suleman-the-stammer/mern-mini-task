import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
        required: [true, "Image lazmi chahiyaii"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: [true, "User id is Required"]
    }

},
    { timestamps: true }
)

const blogModel = mongoose.model('Blog', blogSchema);
export default blogModel