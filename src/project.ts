import Config from './config'

class Project {

    build(config: Config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }

    }

}

export default Project;