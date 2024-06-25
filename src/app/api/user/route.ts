import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email } = body;

    // Check if all required fields are present
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the listing
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Errorrrrr" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // Fetch all users
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
