import Config from './config'
import templateMgr from './template/template_manager';

class Project {

    build(config: Config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }

        var template = templateMgr.tempaltes.find((t) => t.name == config.templateName);

        if (template == null) {
            throw `Can't find template ${config.templateName}`
        }

        console.log(`begin to write template ${config.templateName}`);

        template.write(config.outFolder, config)
    }

}

export default Project;