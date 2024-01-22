import { errors } from "@constants/errors";
import Prompt from "@models/promptModel";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return NextResponse.json(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};
