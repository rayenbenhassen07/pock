import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getUsers() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const users = await prisma.user.findMany();

    return {
      users,
    };
  } catch (error: any) {
    return null;
  }
}
