import mongoose from "mongoose"

export default function conection() {
    const pathBD = ''
    mongoose.connect(pathBD)

    return mongoose;
}