import { errors } from "@constants/errors";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@utils/database";
import User from "@models/userModel";

export async function POST(req) {
  try {
    const { name, email, password, picture} = await req.json();
    const hashedPass = await bcrypt.hash(password, 10);

    await connectToDB();
    const result = await User.create({name, email, password: hashedPass, picture});

    // console.log("Data: ", {name: name, email: email, password: password, picture: picture, image: image});

    return NextResponse.json({message: "User registered successfully"}, {status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: errors.internalServerError}, {status: 500 });
  }
}
