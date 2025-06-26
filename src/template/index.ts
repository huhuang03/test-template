import templateMgr from './template_manager';
// import Config from '../config';
import Project from '../project';
import {ITemplate, ITemplateWriteConfig} from './ITemplate';

export function getTemplates(): ITemplate[] {
  return templateMgr.templates
}

export function writeTemplate(template: ITemplate, config: ITemplateWriteConfig): void {
  new Project().build(template, config)
}
