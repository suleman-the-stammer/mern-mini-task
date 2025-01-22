import mongoose from 'mongoose'
 
const connectdb = async ()=>{
    try {
        await mongoose.connect(process.env.MongoDB_Url);
        console.log("MongoDB connect hugia Ustaad")

    } catch (error) {
        console.log("MonogDb error ha Bhai yai too")
    }
}
export default connectdb
