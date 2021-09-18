import NextAuth from "next-auth";
import GoolgleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoolgleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
