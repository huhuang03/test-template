import * as fs from 'fs'
import * as path from 'path'

class OutFile {
    constructor(public relatePath: string, public content: string, public isFolder: boolean = false) {}

    static fromLocalFile(localPath: string, outPath: string = ""): OutFile {
        if (!fs.existsSync(localPath)) {
            throw `OutFile fromLocalFile file not exist: ${localPath}`
        }
        
        outPath = outPath || path.basename(localPath);
        return new OutFile(outPath, fs.readFileSync(localPath, 'utf-8'));
    }
}

export default OutFile;