import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

interface User {
  id: UserId;
  username?: string | null;
  image?: string | null;
  // Other user properties...
}

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
