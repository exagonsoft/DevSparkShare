import { errors } from "@constants/errors";
import { UploadService } from "@services/uploadService";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { blobFile, fileName } = await req.json();
    if (blobFile) {
      const uploadService = new UploadService();
      let res = uploadService.SaveFile(blobFile, fileName);
    }
    return NextResponse.json({message: "File uploaded successfully"}, {status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
}
