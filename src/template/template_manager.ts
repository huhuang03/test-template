import * as path from 'node:path'
import * as fs from 'node:fs'
import {fileURLToPath} from 'node:url'
import ITemplate, { StaticFolderTemplate } from './template.ts';

class TemplateManager {
    templates: ITemplate[] = []

    constructor() {
        this.initialTemplates()
    }

    initialTemplates() {
        const templateDataFolder = fileURLToPath(new URL("../../template_data", import.meta.url));
        console.log(`templateDataFolder: ${templateDataFolder}`)
        if (!fs.existsSync(templateDataFolder)) {
            throw `Why ${templateDataFolder} doesn't exists`
        }

        this.templates = fs.readdirSync(templateDataFolder).filter((f) => {
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

const templateMgr = new TemplateManager();

export default templateMgr
