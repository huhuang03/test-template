import * as path from 'path'
import OutFile from '../out_file';
import * as fs from 'fs-extra';
import {IGNORE_FOLDERS} from '../cons';
import {ITemplate, ITemplateWriteConfig} from './ITemplate';

export abstract class Template extends ITemplate {
  protected constructor(name: string) {
    super(name)
  }

  abstract getOutput(): OutFile[]

  private writeSingleFile(to: string, content: string) {
    fs.writeFileSync(to, content);
  }

  write(config: ITemplateWriteConfig) {
    this.getOutput().forEach(output => {
      if (!output.isFolder) {
        this.writeSingleFile(path.resolve(config.outFolder, output.relatePath), output.content);
      } else {
        fs.mkdirSync(path.resolve(config.outFolder, output.relatePath));
      }
    });
  }
}

const CONFIG_FILE_NAME = 'mytmp_config.json'

export class StaticFolderTemplate extends ITemplate {
  constructor(public folder: string) {
    super(path.basename(folder));
  }

  write(config: ITemplateWriteConfig) {
    console.log(`this.folder: ${this.folder}, ${config.outFolder}`)
    fs.copySync(this.folder, config.outFolder, {
      filter: (fname: string) => {
        if (!IGNORE_FOLDERS.includes(fname)) {
          return false
        }
        return !fname.endsWith(CONFIG_FILE_NAME);
      }
    })
    // this.replaceAllPlaceHolder(config.outFolder)
  }

  // has bug that can only replace in level 0
  replaceAllPlaceHolder(folder: string) {
    fs.readdir(folder, (e, items) => {
      if (e) {
        console.log(e)
        return
      }

      for (const item of items) {
        const fullPath = path.join(folder, item);
        if (fs.statSync(fullPath).isFile()) {
          let content = fs.readFileSync(fullPath, 'utf-8');
          content = content.replace(/\$NAME\$/g, this.name)
          fs.writeFileSync(fullPath, content)
        }
      }
    })
  }
}

export default ITemplate;
