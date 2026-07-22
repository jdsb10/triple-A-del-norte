import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@triple-a/db";

export const authOptions: NextAuthOptions = {
  // Respaldo para que el panel no falle si aún no se configuró NEXTAUTH_SECRET
  // en el entorno de despliegue; reemplázalo por una variable de entorno real
  // en cuanto se conecte la base de datos de producción.
  secret: process.env.NEXTAUTH_SECRET ?? "triple-a-del-norte-dev-secret-cambiar-en-produccion",
  session: { strategy: "jwt" },
  pages: { signIn: "/panel/login" },
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const usuario = await prisma.usuarioPanel.findUnique({
          where: { email: credentials.email },
        });
        if (!usuario || !usuario.activo) return null;

        const valido = await bcrypt.compare(credentials.password, usuario.passwordHash);
        if (!valido) return null;

        return { id: usuario.id, email: usuario.email, name: usuario.nombre, rol: usuario.rol };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.rol = (user as any).rol;
      return token;
    },
    async session({ session, token }) {
      if (session.user) (session.user as any).rol = token.rol;
      return session;
    },
  },
};
