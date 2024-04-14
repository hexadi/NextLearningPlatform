import fs from 'fs';
import fsProm from 'fs/promises'
import { exec } from 'child_process';
import util from "util";
import { NextRequest, NextResponse } from 'next/server';

import JSZip from 'jszip';
import { getUser } from '@/lib/user';

const { promisify } = util;
const writeFileAsync = promisify(fs.writeFile);
const unlinkFileAsync = promisify(fs.unlink);

/**
 * Handles the incoming HTTP request and executes the user-provided Python code
 * @param req - The incoming HTTP request object
 * @returns A promise that resolves to the HTTP response
 */
async function handleRequest(req: NextRequest): Promise<Response> {
    const user = await getUser(req.cookies)
    if (user == null) {
        const folderName = `${process.cwd()}/python/${(user as any)?._id}`
        const importFolder = `${process.cwd()}/python/upload/${(user as any)?._id}`
        if (await fsProm.readdir(folderName) != null) await fsProm.rmdir(folderName, { recursive: true });
        await promisify(exec)(`mkdir -p ${folderName}`)
        const importFolderDir = await fsProm.readdir(importFolder)
        if (importFolderDir != null) {
            for (const file of importFolderDir) {
                var oldPath = importFolder + "/" + file
                var newPath = folderName + "/" + file

                await fsProm.rename(oldPath, newPath)
            }
        }
        // Generate a unique filename based on the current timestamp
        const timestamp = new Date().getTime();
        const filename = `${folderName}/${timestamp}.py`;

        // Extract the code from the request body
        const requestData = await req.json();
        // Write the code to a file
        await writeFileAsync(filename, requestData.code);
        const dirFile = await fsProm.readdir(process.cwd() + "/python/temp")
        try {
            // Execute the user-provided code using a child process
            const { stdout, stderr } = await promisify(exec)(`source venv/bin/activate && cd ${process.cwd()}/python/temp && python3 ${filename}`);
            const dirFileAfter = await fsProm.readdir(process.cwd() + "/python/temp")
            // Delete the temporary file
            //await unlinkFileAsync(filename);
            if (dirFile.length != dirFileAfter.length) {
                const zip = new JSZip();
                var files = dirFileAfter.filter(function (el) {
                    return dirFile.indexOf(el) < 0;
                });
                for (const file of files) {
                    const fileData = await fsProm.readFile(process.cwd() + "/python/temp/" + file);
                    zip.file(file, fileData);
                }
                zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
                    .pipe(fs.createWriteStream(process.cwd() + "/python/temp/attachment.zip"))
                return NextResponse.json({ stdout, stderr, files });
            }
            // Return the stdout and stderr as a JSON response
            return NextResponse.json({ stdout, stderr, files: [] });
        } catch (error: any) {
            // If an error occurs, modify the error object and return it as a JSON response
            error.cmd = "python3 temp.py";
            error.stderr = error.stderr.replace(filename, "temp.py");
            await unlinkFileAsync(filename);
            return NextResponse.json({ ...error, files: [] });
        }
    } else {
        return NextResponse.json({ error: "Unauthorized" })
    }
}

export { handleRequest as POST };