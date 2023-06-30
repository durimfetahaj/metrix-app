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
      async authorize(credentials, req) {
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

          console.log("user", userCredential.user.uid); // Add this line

          if (userCredential.user) {
            // If the user is successfully authenticated, you can return the user object
            return {
              id: userCredential.user.uid,
              email: userCredential.user.email,
            };
          } else {
            // If the authentication fails, return null
            return null;
          }
        } catch (error) {
          // Handle any errors that occur during authentication
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ user, token }) {
      return token;
    },

    redirect() {
      return "/dashboard";
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
