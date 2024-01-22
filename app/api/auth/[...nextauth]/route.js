import NextAuth from "next-auth";

import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import { AuthProviders } from "@constants/providers";
import { configs } from "@constants/config";

const handler = NextAuth({
  providers: AuthProviders,
  session: {
    strategy: "jwt",
    
  },
  secret: configs.NEXTAUTH_SECRET,
  pages: {
    signIn: '/authenticate',
    signOut: '/'
  }
});

export { handler as GET, handler as POST };

// async session({ session }) {
//   const sessionUser = await User.findOne({
//       email: session.user.email
//   });

//   session.user.id = sessionUser._id.toString();
//   return session;
// },
// async signIn({ profile }) {
//   try {
//     await connectToDB();

//     const existentUser = await User.findOne({
//       email: profile.email,
//     });

//     if (!existentUser) {
//       await User.create({
//         email: profile.email,
//         username: profile.name.replace(" ", "").toLowerCase(),
//         image: profile.picture,
//       });
//     }

//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// },
