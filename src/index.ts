#!/usr/bin/env node

import Project from './project'
import Config from './config'
import templateMgr from './template/template_manager';

const p = new Project();

const templates = templateMgr.tempaltes.map(t => t.name)

const parser = require('yargs')
  .scriptName('tt')
  .command('list', 'list all templates', () => {
    console.log(`All templates:`);
    console.log(`\t${templates.join('\n\t')}`);
  })
  .option('template', {
    alias: 't',
    type: 'string',
    choices: templates,
    description: '[-t] The template name'
  })
  .option('out', {
    alias: 'o',
    type: 'string',
    description: 'The output folder'
  })
  .demandCommand()

for (let t of p.templates) {
  parser.command(t.name, `create a ${t.name} type project`, () => {
  }, function () {
    const out = `t_${t.name}`;
    p.build(new Config(t.name, out))
  })
}

parser.parse()
