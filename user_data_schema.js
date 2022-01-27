import mongoose from 'mongoose';

const UserDataSchema = mongoose.Schema({
    Name: String,
    FName: String,
    Address: String,
    PhonNo: String,
    Email: String
})

export default mongoose.model("UserDetails",UserDataSchema)