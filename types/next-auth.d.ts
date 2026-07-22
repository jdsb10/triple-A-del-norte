import "next-auth";

declare module "next-auth" {
  interface User {
    rol?: string;
  }
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      rol?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    rol?: string;
  }
}
