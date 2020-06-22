import * as path from 'path'
import * as fs from 'fs'
import ITemplate, { StaticFolderTempalte } from './template';

class TemplateManager {
    tempaltes: ITemplate[] = []

    constructor() {
        this.initialTempaltes() 
    }

    initialTempaltes() {
        var templateDataFolder = path.resolve(__dirname, "../../template_data")
        if (!fs.existsSync(templateDataFolder)) {
            throw `Why ${templateDataFolder} doesn't exists`
        }

        this.tempaltes = fs.readdirSync(templateDataFolder).filter((f) => {
            return fs.statSync(path.resolve(templateDataFolder, f)).isDirectory
        })
        .map((f) => {
            return this.createTemplateFromFodler(path.resolve(templateDataFolder, f))
        })
    }

    createTemplateFromFodler(folderPath: string): ITemplate {
        var fullPath = path.resolve(folderPath)
        if (!fs.existsSync(fullPath)) {
            console.error("file not exist when create template from folder, folder: ", folderPath);
            return null
        }

        return new StaticFolderTempalte(folderPath) 
    }
}

var templateMgr = new TemplateManager()

export default templateMgr