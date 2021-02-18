import * as fs from 'fs-extra'
import * as path from 'path'
import OutFile from "../out_file";
import Config from '../config'

abstract class ITemplate {

    constructor(public name: string) {
        if (!this.name) {
            throw "Must specify name";
        }
    }


    abstract write(outFolder: string, config: Config)
}

export abstract class Template extends ITemplate {
    constructor(name: string) {
        super(name)
    }

    abstract getOutput(): OutFile[]

    write(outFolder: string, config: Config) {
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
    constructor(public name: string, public outFile: OutFile[]) {
        super(name)
    }

    getOutput(): OutFile[] {
        return this.outFile
    }
}

const CONFIG_FILE_NAME = "mytmp_config.json"

export class StaticFolderTempalte extends ITemplate {
    constructor(public folder: string) {
       super(path.basename(folder));
    }

    write(outFolder: string, config: Config) {
        var ncp = require('ncp').ncp;
        ncp(this.folder, outFolder, {
            filter: (fname) => {
                if (fname.includes(".idea") || fname.includes("cmake-build-debug")) {
                    return false
                }
                if (fname.endsWith(CONFIG_FILE_NAME)) {
                    return false
                }
                return true
            }
        }, (err: any) => {
            if (err) {
                console.error(err)
                return
            }
            this.replaceAllPlaceHolder(outFolder, config)
        })
    }

    // has bug that can only replace in level 0
    replaceAllPlaceHolder(folder, config: Config) {
        fs.readdir(folder, (e, items) => {
            // if (folder.includes('build')) {
            //     return
            // }

            // if (folder == ".idea") {
            //     return
            // }

            // if (folder == "mytmp_config.json") {
            //     return
            // }

            if (e) {
                console.log(e)
                return
            }

            for (var item of items) {
                // console.log("folder: " + folder);
                // console.log("item: " + item);
                var fullPath = path.join(folder, item)
                if (fs.statSync(fullPath).isFile()) {
                    var content = fs.readFileSync(fullPath, 'utf-8')
                    content = content.replace(/\$NAME\$/g, config.name)
                    fs.writeFileSync(fullPath, content)
                }
            }
        })
    }
}

export default ITemplate;