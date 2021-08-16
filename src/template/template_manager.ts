import * as path from 'path'
import * as fs from 'fs'
import ITemplate, { StaticFolderTemplate } from './template';

class TemplateManager {
    tempaltes: ITemplate[] = []

    constructor() {
        this.initialTemplates()
    }

    initialTemplates() {
        const templateDataFolder = path.resolve(__dirname, "../../template_data");
        if (!fs.existsSync(templateDataFolder)) {
            throw `Why ${templateDataFolder} doesn't exists`
        }

        this.tempaltes = fs.readdirSync(templateDataFolder).filter((f) => {
            return fs.statSync(path.resolve(templateDataFolder, f)).isDirectory
        })
        .map((f) => {
            return this.createTemplateFromFolder(path.resolve(templateDataFolder, f))
        }).filter(a => a).map(a => a!!)
    }

    createTemplateFromFolder(folderPath: string): ITemplate | null {
        const fullPath = path.resolve(folderPath);
        if (!fs.existsSync(fullPath)) {
            console.error("file not exist when create template from folder, folder: ", folderPath);
            return null
        }

        return new StaticFolderTemplate(folderPath)
    }
}

var templateMgr = new TemplateManager()

export default templateMgr
