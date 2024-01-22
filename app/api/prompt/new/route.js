import { errors } from "@constants/errors";
import Prompt from "@models/promptModel";
import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userEmail, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const user = await User.findOne({email: userEmail})

    const newPrompt = new Prompt({
      creator: user?._id,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return NextResponse.json(JSON.stringify(newPrompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};
