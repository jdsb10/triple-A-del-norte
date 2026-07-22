import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/panel/login" },
});

export const config = {
  matcher: ["/panel/((?!login).*)", "/api/cartera/:path*"],
};
