import * as fs from "fs";

class File {
    private readonly fileName: string;

    constructor(fileName: string | undefined = undefined) {
        this.fileName = fileName || this.getFileName();
    }

    getFileName(): string {
        const [, , fileName] = process.argv;
        return fileName;
    }

    getFileData(): Buffer {
        try {
            return fs.readFileSync(this.fileName);
        } catch (e) {
            throw new Error('Read file error')
        }
    }
}

export default File
