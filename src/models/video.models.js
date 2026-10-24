import mongoose, {Schema} from "mongoose"

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {   
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: [
        {type: String,
        required: true,
        trim: true}
    ],
    views: {
        type: Number,
        default: 0
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

export const Video = mongoose.model("Video", videoSchema)
