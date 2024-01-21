import mongoose from "mongoose";

export default async function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return await mongoose.connection.asPromise();
  }
  return await mongoose.connect(process.env.MONGODB_URI);
}
