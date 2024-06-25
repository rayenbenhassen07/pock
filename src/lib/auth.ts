import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prismadb"
import { compare } from "bcryptjs";

export const authOptions:NextAuthOptions ={
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },

    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "user@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if(!credentials?.email || !credentials.password){
                return null;
            }

            const existingUser = await prisma.user.findUnique({
                where: {
                  email: credentials?.email
                }
            });

            if(!existingUser){
                return null;
            }

            const passwordMatch = await compare(
                credentials.password,
                existingUser.password
              );
              
              if (!passwordMatch) {
                return null;
              }
      
              return {
                id:`${existingUser.id}`,
                username:existingUser.username,
                email:existingUser.email
              };
            
          }
        })
      ]
}
