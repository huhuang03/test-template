import templateMgr from './template_manager.ts';
import Project from '../project.ts';
import {ITemplate, ITemplateWriteConfig} from './ITemplate.ts';

export function getTemplates(): ITemplate[] {
  return templateMgr.templates
}

export function writeTemplate(template: ITemplate, config: ITemplateWriteConfig): void {
  new Project().build(template, config)
}
