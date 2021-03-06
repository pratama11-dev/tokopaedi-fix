import dotenv from 'dotenv';

dotenv.config();

export default{
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/tokopaedi',
    JWT_SECRET: process.env.JWT_SECRET || 'somthingsecret',
    PORT: process.env.PORT || 5000
}