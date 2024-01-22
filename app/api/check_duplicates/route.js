import { errors } from "@constants/errors";
import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectToDB();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    console.log("Error: ",error);
    return NextResponse.json(
        { message: errors.internalServerError },
        { status: 500 }
      );
  }
}
