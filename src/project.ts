import * as fs from 'fs-extra'
import * as path from 'path'
import Config from './config'
import TemplateCss from './templates/css/template_css';
import TempalteCmake from './templates/cmake/template_cmake';

class Project {
    static ALL_TEMPLATES = [new TemplateCss(), new TempalteCmake()]

    build(config: Config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }

        var template = Project.ALL_TEMPLATES.find((t) => t.name == config.templateName);
        if (template == null) {
            throw `Can't find template ${config.templateName}`
        }

        template.getOutput().forEach(output => {
            if (!output.isFolder) {
                fs.outputFileSync(path.resolve(config.outFolder, output.path), output.content);
            } else {
                fs.mkdir(path.resolve(config.outFolder, output.path))
            }
        });
    }

}

export default Project;