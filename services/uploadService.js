import { errors } from "@constants/errors";
import { existsSync, mkdirSync, writeFile, chmodSync } from "fs";
import { join } from "path";

export class UploadService {
  constructor() {}

  SaveFile(blobFile, fileName) {
    const uploadFolder = "../dev-spark-share/public/uploads";
    try {
      const buffer = Buffer.from(blobFile, "base64");
      if (!existsSync(uploadFolder)) {
        mkdirSync(uploadFolder);
      }
      const filePath = join(uploadFolder, fileName);

      // Write the buffer data to the file
      writeFile(filePath, buffer, { flag: "w" }, (error) => {
        if (error) {
          throw new Error(errors.systemWriteError, error);
        }
        // Set file permissions (read and write for everyone)
        chmodSync(filePath, "666");
      });
      return true;
    } catch (error) {
      console.log("Error: ", error);
      throw new Error(errors.internalServerError, error);
    }
  }
}
