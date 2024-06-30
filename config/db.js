import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongodb database ${connect.connection.host}`);
    }catch (error){
        console.log(`Error in Mongodb ${error}`)

    }
}
export default connectDB;