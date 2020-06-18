import * as fs from 'fs-extra'
import * as path from 'path'
import OutFile from "../out_file";

abstract class ITemplate {
    constructor(public name: String) {
        if (!this.name) {
            throw "Must specify name";
        }
    }


    abstract write(outFolder: string)
}

export abstract class Template extends ITemplate {
    constructor(name: String) {
        super(name)
    }

    abstract getOutput(): OutFile[]

    write(outFolder: string) {
        this.getOutput().forEach(output => {
            if (!output.isFolder) {
                fs.outputFileSync(path.resolve(outFolder, output.relatePath), output.content);
            } else {
                fs.mkdir(path.resolve(outFolder, output.relatePath))
            }
        });
    }
}

class StaticTempalte extends Template {
    constructor(public name: String, public outFile: OutFile[]) {
        super(name)
    }

    getOutput(): OutFile[] {
        return this.outFile
    }
}

export class StaticFolderTempalte extends ITemplate {
    constructor(public folder: string) {
       super(path.basename(folder));
    }

    write(outFolder: string) {
        var ncp = require('ncp').ncp;
        ncp(this.folder, outFolder, (err: any) => {
            if (err) {
                console.error(err)
            }
        })
    }
}

export default ITemplate;