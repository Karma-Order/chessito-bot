// eslint-disable-next-line import/prefer-default-export
export const userSchema = {
    id: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
    }
};