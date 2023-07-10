import { app } from "@/firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const auth = getAuth(app);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email ?? "",
            password ?? ""
          );

          if (userCredential.user) {
            return {
              id: userCredential.user.uid,
              name: userCredential.user.displayName,
              email: userCredential.user.email,
              image: userCredential.user.photoURL,
            };
          }
        } catch (error) {
          throw new Error("Invalid email or password");
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ user, token }) {
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
