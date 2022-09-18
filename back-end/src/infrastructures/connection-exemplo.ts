import mongoose from "mongoose"

import * as dotenv from 'dotenv'

dotenv.config()

export default function conection() {
    const pathBD = "" + process.env.DATA_BASE_URL
    mongoose.connect(pathBD)

    return mongoose;
}