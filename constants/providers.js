import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcrypt from "bcrypt";

export const AuthProviders = [
  CredentialsProvider({
    name: "credentials",
    credentials: {},
    async authorize(credentials) {
      const { email, password } = credentials;
      try {
        await connectToDB();
        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return null;
        }

        return {id: user.id, email: user.email, password: user.password, image: user.picture};
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  }),
];

// GoogleProvider({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   }),
