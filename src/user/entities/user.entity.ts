import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface User extends Document {
    id: string;
    email: string;
    password: string;
    userName: string;
    roles: string[];
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    firstname: string;
    lastname: string;
    checkPassword(password: string): Promise<boolean>;
}

export const UserSchema = new Schema({
    id: {
        type: String,
        default: () => new Date().getTime().toString(),
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    userName: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: false,
        default: null
    },
    lastname: {
        type: String,
        required: false,
        default: null
    },
    provider: {
        type: String,
        required: false,
        default: 'local'
    },
    confirmed: {
        type: Boolean,
        required: false,
        default: true
    },
    blocked: {
        type: Boolean,
        required: false,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
});

UserSchema.methods.checkPassword = async function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};
