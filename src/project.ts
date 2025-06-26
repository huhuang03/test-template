import {ITemplate, ITemplateWriteConfig} from './template/ITemplate';

class Project {
  build(template: ITemplate, config: ITemplateWriteConfig) {
    template.write({outFolder: config.outFolder || `t_${template.name}`})
  }
}

export default Project;
