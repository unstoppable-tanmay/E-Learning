import NextAuth, { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/prisma";
import { compareSync } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });
          if (!user) return null;
          if (compareSync(credentials.password, user?.password!))
            return { id: user.id, name: user.name, email: credentials.email };
          else return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ user, session, token }) {
      const userData = await prisma.user.findFirst({
        where: { email: user.email },
      });
      if (!userData) {
        return { ...user, ...session, ...token, userIsExit: false };
      }
      return { ...user, ...session, ...token, ...userData };
    },
    async signIn({ email, credentials, user, account, profile }) {
      let userExits = await prisma.user.findFirst({
        where: { email: profile?.email },
      });
      if (userExits) return true;
      else {
        let createUser = await prisma.user.create({
          data: {
            email: profile?.email!,
            name: profile?.name ?? "Harry",
            provider: true,
            role: "USER",
          },
        });
        if (createUser) return true;
        else return false;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: "tanmay",
  events: {},
  pages: {
    signIn: "/dashboard",
    signOut: "/",
    error: "/",
    newUser: "/new-user",
  },
};

export default NextAuth(authOptions);
