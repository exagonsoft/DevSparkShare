const GOOGLE_ID=process.env.GOOGLE_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;
const MONGODB_URI=process.env.MONGODB_URI;
const NEXTAUTH_SECRET=process.env.NEXTAUTH_SECRET;
const NEXTAUTH_URL=process.env.NEXTAUTH_URL;

export const configs = {
    GOOGLE_ID: GOOGLE_ID ? GOOGLE_ID : "1029591486380-8v1r3dqsl95n2biv9praa83g6do8ghl7.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET ? GOOGLE_CLIENT_SECRET : "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",
    MONGODB_URI: MONGODB_URI ? MONGODB_URI : "mongodb+srv://root:SamuelMartin11@devsparkdb.ws74qnh.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: NEXTAUTH_SECRET ? NEXTAUTH_SECRET : "dfgfsdgdfgdfyrtyrtyfghfdgfhf",
    NEXTAUTH_URL: NEXTAUTH_URL ? NEXTAUTH_URL : "http://localhost:3000",
}